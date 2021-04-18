from operator import and_
import os
from sqlalchemy.orm import query
from werkzeug.exceptions import HTTPException
from app.forms.forms import NewCarForm
from app.database.models import Users, Cars, Favourites
from app import app, db
from flask import json, request, jsonify, g, make_response, abort
import jwt
import datetime
from jwt.exceptions import ExpiredSignatureError, DecodeError, InvalidSignatureError
from psycopg2 import DatabaseError
from app.database.serializers import UserSerializer, FavouritesSerializer, CarsSerializer
from werkzeug.utils import secure_filename
from functools import wraps
# should be removed when api testing is complete
from flask_wtf.csrf import generate_csrf

def generate_token():
    # 
    payload = {
        'sub': '12345', 
        'name': 'John Doe',
        'iat': datetime.datetime.now(datetime.timezone.utc),
        'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(seconds=30)
    }
    token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')

    return jsonify(error=None, data={'token': token}, message="Token Generated")


def token_required(f):

    @wraps(f)
    def decorated(*args, **kwargs):
        
        auth = request.headers.get('Authorization', None) # or request.cookies.get('token', None)

        if not auth:
            return jsonify({'message': 'Authorization header is expected'}), 401

        parts = auth.split()

        if parts[0].lower() != 'bearer':
            return jsonify({'message': 'Authorization header must start with Bearer'}), 401
        elif len(parts) == 1:
            return jsonify({'message': 'Token not found'}), 401
        elif len(parts) > 2:
            return jsonify({'message': 'Authorization header must be Bearer + \s + token'}), 401

        token = parts[1]
        try:
            data = jwt.decode(token, app.config.get(
                'SECRET_KEY'), algorithms="HS256")
            # may be changed when auth is complete
            current_user = Users.query.get(data.get('user_id'))
            
            if not current_user:
                abort(make_response({"message":"Token is invalid"},401))

        except InvalidSignatureError:
            abort(make_response({"message": 'Token is invalid'}, 401))
        except ExpiredSignatureError:
            abort(make_response({"message": 'Token is expired'}, 401))
        except DecodeError:
            return abort(make_response({'message': 'Token signature is invalid'},401))
        
        g.current_user = current_user
        return f(*args, **kwargs)

    return decorated



@app.route("/api/register", methods=["POST"])
def register():
    pass


@app.route("/api/auth/login", methods=["POST"])
def login():
    pass


@app.route("/api/auth/logout", methods=["POST"])
@token_required
def logout():
    pass


@app.route("/api/cars", methods=["GET", "POST"])
@token_required
def handle_cars():
    if request.method == "GET":
        query_res = Cars.query.all()
        print(query_res)
        if query_res:
            res = CarsSerializer(many=True).dump(query_res)
            return jsonify(res), 200
        else:
            return jsonify({"message" : "No cars in the database"}),404
    else:
        form = NewCarForm()
        # should be deleted 
        # form.csrf_token.data = generate_csrf()
        if form.validate():
            
            try:
                make = form.make.data
                model = form.model.data
                photofile = form.photo.data
                filename = secure_filename(photofile.filename)
                transmission = form.transmission.data
                colour =form.colour.data
                price = form.price.data
                year = form.year.data
                description = form.description.data
                car_type = form.car_type.data
                
                full_path =os.path.join(os.getcwd(), app.config.get("UPLOAD_FOLDER"), filename)
                photofile.save(full_path)
                # may be changed when auth is complete
                user_id = g.current_user.id
                
                new_car = Cars(description,make,model, colour,year, transmission, car_type, price, filename, user_id)
                
                db.session.add(new_car)
                db.session.commit()
                return jsonify({"message":"The car was added successfully"}),201
            except Exception as e:
                return jsonify({"message" : str(e)}),500
        else:
            errs =[]
            for field ,err in form.errors.items():
                errs += [{"field":field, "messages":err}]
                
            return jsonify({"message":"invalid form data", "errors":errs}),400

@app.route("/api/cars/<int:car_id>", methods=["GET"])
@token_required
def get_one_car(car_id):
    query_res = Cars.query.get(car_id)
    if query_res:
        res = CarsSerializer().dump(query_res)
        return jsonify(res),200
    else:
        return jsonify({"message": "The requested car does not exist"}),404


@app.route("/api/cars/<int:car_id>/favourite", methods=["POST"])
@token_required
def add_fav_car(car_id):    
    car = Cars.query.get(car_id)
    if car:
        try:
            user = g.current_user
            new_fav = Favourites(car_id,user.id)
            db.session.add(new_fav)
            db.session.commit()
            return jsonify({"message":"Requested car was successfully added to the user's favourites"}),201
        except Exception as e:
            return jsonify({"message":str(e)}),500
    else:
        return jsonify({"message": "The requested car does not exist"}),404
        

@app.route("/api/search", methods=["GET"])
@token_required
def search():
    make = request.args.get("make")
    model = request.args.get("model")
    
    query_res = None
    
    if make and model:
        query_res = Cars.query.filter(and_(Cars.make.ilike(f"%{make}%"), Cars.model.ilike(f"%{model}%"))).all()
    elif make:
        query_res = Cars.query.filter(Cars.make.ilike(f"%{make}%")).all()
    elif model:
        query_res = Cars.query.filter(Cars.model.ilike(f"%{model}%")).all()
    else:
        query_res = Cars.query.all()
        
    if query_res:
        res = CarsSerializer(many=True).dump(query_res)
        return jsonify(res),200
    else:
        return jsonify({"message":"No cars found"}),404
        
        


@app.route("/api/users/<int:user_id>", methods=["GET"])
@token_required
def get_user_details(user_id):
    user = g.current_user
    
    if user.id == user_id:
        query_res = Users.query.get(user_id)
        if query_res:
            res = UserSerializer().dump(query_res)
            return jsonify(res),200
        else:
            return jsonify({"message":" The requested user does not exist"}),404
    else:
        return jsonify({"message" : "users only have access to their own profile"}),401

@app.route("/api/users/<int:user_id>/favourites", methods=["GET"])
@token_required
def get_favourite_cars(user_id):
    user = g.current_user
    
    if user.id == user_id:
        query_res =Cars.query.join(Favourites).filter_by(user_id=user_id).all()
        if query_res:
            res = CarsSerializer(many=True).dump(query_res)
            return jsonify(res),200
        else:
            return jsonify({"message":"No favourites found"}),404
    else:
        return jsonify({"message":"users only have access to their own favourites"}),401

@app.after_request
def add_header(response):
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=0'
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    return response

@app.errorhandler(HTTPException)
def http_errors_to_json(error):
    response = {
        "message": str(error.description),
    }
    response = jsonify(response)
    response.status_code = error.code
    return response

@app.errorhandler(DatabaseError)
def db_errors_to_json(error):
    response = {
        "message": str(error),
    }
    response = jsonify(response)
    response.status_code = 500
    return response


# route to be deleted when auth is finished
@app.route("/token")
def gen_token():
    expiry_time = app.config.get('JWT_ACCESS_LIFESPAN').get('hours')
    
    token = jwt.encode({
        'user_id': 1,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=expiry_time),
    }, app.config.get('SECRET_KEY'), algorithm="HS256")
    
    
    return jsonify({"token":token}),200