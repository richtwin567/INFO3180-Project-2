from operator import and_, or_

from werkzeug.exceptions import HTTPException
from app.forms.forms import NewCarForm
from app.database.models import Users, Cars, Favourites
from app import app, db
from flask import request, jsonify, g, make_response, abort
import jwt
import datetime
from jwt.exceptions import ExpiredSignatureError, DecodeError, InvalidSignatureError
from psycopg2 import DatabaseError

from functools import wraps

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
            return jsonify({'code': 'authorization_header_missing', 'description': 'Authorization header is expected'}), 401

        parts = auth.split()

        if parts[0].lower() != 'bearer':
            return jsonify({'code': 'invalid_header', 'description': 'Authorization header must start with Bearer'}), 401
        elif len(parts) == 1:
            return jsonify({'code': 'invalid_header', 'description': 'Token not found'}), 401
        elif len(parts) > 2:
            return jsonify({'code': 'invalid_header', 'description': 'Authorization header must be Bearer + \s + token'}), 401

        token = parts[1]
        try:
            data = jwt.decode(token, app.config.get(
                'SECRET_KEY'), algorithms="HS256")
            # may be changed when auth is complete
            current_user = Users.query.get(data.get('user_id'))

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
        res = Cars.query.all()
        if res:
            return jsonify(res), 200
        else:
            return jsonify({"message" : "No cars in the database"}),404
    else:
        form = NewCarForm()
        if form.validate_on_submit():
            
            try:
                d = form.__dict__()
                print(d)
                make = form.make.data
                model = form.model.data
                photofile = form.photo.data
                filename = photofile.filename
                transmission = form.transmission.data
                colour =form.colour.data
                price = form.price.data
                year = form.year.data
                description = form.description.data
                car_type = form.car_type.data
                
                # may be changed when auth is complete
                user_id = g.current_user.id
                
                new_car = Cars(description,make,model, colour,year, transmission, car_type, price, filename, user_id)
                
                db.session.add(new_car)
                db.session.commit()
                return jsonify({"message":"the car was added successfully"}),201
            except Exception as e:
                return jsonify({"message" : str(e)}),500
        else:
            return jsonify({"message":"invalid form data"}),400

@app.route("/api/cars/<car_id>", methods=["GET"])
@token_required
def get_one_car(car_id):
    res = Cars.query.get(car_id)
    if res:
        return jsonify(res),200
    else:
        return jsonify({"message": "The requested car does not exist"}),404


@app.route("/api/cars/<car_id>/favourite", methods=["POST"])
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
    
    res = None
    
    if make and model:
        res = Cars.query.filter(and_(Cars.make.like(make), Cars.model.like(model)))
    elif make:
        res = Cars.query.filter(Cars.make.like(make))
    elif model:
        res = Cars.query.filter(Cars.model.like(model))
    else:
        res = Cars.query.all()
        
    return jsonify(res or []),200


@app.route("/api/users/<user_id>", methods=["GET"])
@token_required
def get_user_details(user_id):
    user = g.current_user
    
    if user.id == user_id:
        res = Users.guery.get(user_id)
        if res:
            return jsonify(res),200
        else:
            return jsonify({"message":" The requested user does not exist"}),404
    else:
        return jsonify({"message" : "users only have access to their own profile"}),401

@app.route("/api/users/<user_id>/favourites")
@token_required
def get_favourite_cars(user_id):
    user = g.current_user
    
    if user.id == user_id:
        res = Users.filter_by(id=user_id).join(Favourites)
        if res:
            return jsonify(res),200
        else:
            return jsonify({"message":"No favourites found"}),404
    else:
        return jsonify({"message" : "users only have access to their own favourites"}),401

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
        'exp': datetime.utcnow() + datetime.timedelta(hours=expiry_time),
    }, app.config.get('SECRET_KEY'), algorithm="HS256")