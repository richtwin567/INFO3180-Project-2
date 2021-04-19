import os
import datetime
from functools import wraps

from flask import json, request, jsonify, g, make_response, abort
from operator import and_
from sqlalchemy.orm import query
from psycopg2 import DatabaseError
from werkzeug.exceptions import HTTPException
from werkzeug.utils import secure_filename
import jwt
from jwt.exceptions import (
    ExpiredSignatureError,
    DecodeError,
    InvalidSignatureError
)

from app import app, db
from app.database.models import UserModel, Cars, Favourites
from app.forms.forms import NewCarForm, LoginForm, RegisterForm
from app.database.serializers import (
    UsersSerializer,
    FavouritesSerializer,
    CarsSerializer
)

# should be removed when api testing is complete
from flask_wtf.csrf import generate_csrf


def token_required(f):
    """
    Wraps a functions and makes it token required

    Args:
        f (function):   The function to wrap

    Returns:
        function -> The decorator function
    """

    @wraps(f)
    def decorated(*args, **kwargs):

        # or request.cookies.get('token', None)
        auth = request.headers.get('Authorization', None)

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
            current_user = UserModel.query.get(data.get('user_id'))

            if not current_user:
                abort(make_response({"message": "Token is invalid"}, 401))

        except InvalidSignatureError:
            abort(make_response({"message": 'Token is invalid'}, 401))
        except ExpiredSignatureError:
            abort(make_response({"message": 'Token is expired'}, 401))
        except DecodeError:
            return abort(make_response({'message': 'Token signature is invalid'}, 401))

        g.current_user = current_user
        return f(*args, **kwargs)

    return decorated


@app.route("/api/auth/logout", methods=["POST"])
@token_required
def logout():
    pass


@app.route("/api/cars", methods=["GET", "POST"])
@token_required
def handle_cars():
    """
    If the request is a GET request, returns all the cars in the database if there are cars. 
    If the request is a POST request, adds a new car to the database

    Args:
        None

    Returns:
        if GET:
            all cars or 404 if there are no cars
        if POST:
            succes or failure message
    """

    if request.method == "GET":
        query_res = Cars.query.all()
        if query_res:
            res = CarsSerializer(many=True).dump(query_res)
            return jsonify(res), 200
        else:
            return jsonify({"message": "No cars in the database"}), 404
    else:
        form = NewCarForm()
        # should be deleted
        # form.csrf_token.data = generate_csrf()
        if form.validate_on_submit():

            try:
                # get form data
                make = form.make.data
                model = form.model.data
                photofile = form.photo.data
                filename = secure_filename(photofile.filename)
                transmission = form.transmission.data
                colour = form.colour.data
                price = form.price.data
                year = form.year.data
                description = form.description.data
                car_type = form.car_type.data

                # save the photo
                full_path = os.path.join(
                    os.getcwd(), app.config.get("UPLOAD_FOLDER"), filename)
                photofile.save(full_path)
                # may be changed when auth is complete
                user_id = g.current_user.id

                # add the car to the database
                new_car = Cars(description, make, model, colour, year,
                               transmission, car_type, price, filename, user_id)

                db.session.add(new_car)
                db.session.commit()
                return jsonify({"message": "The car was added successfully"}), 201
            except Exception as e:
                return jsonify({"message": str(e)}), 500
        else:

            # if validation fails send the errors
            errs = []
            for field, err in form.errors.items():
                errs += [{"field": field, "messages": err}]

            return jsonify({"message": "Invalid form data", "errors": errs}), 400


@app.route("/api/cars/<int:car_id>", methods=["GET"])
@token_required
def get_one_car(car_id):
    """
    Gets a single car 

    Args:
        car_id(int):    the car's ID

    Returns:
        The car or 404 if the car was not found
    """

    query_res = Cars.query.get(car_id)
    if query_res:
        res = CarsSerializer().dump(query_res)
        return jsonify(res), 200
    else:
        return jsonify({"message": "The requested car does not exist"}), 404


@app.route("/api/cars/<int:car_id>/favourite", methods=["POST"])
@token_required
def add_fav_car(car_id):
    """
    Adds a car to the current user's favourites

    Args:
        car_id(int):    the car's ID

    Returns:
        success or failure message
    """

    car = Cars.query.get(car_id)
    if car:
        try:
            user = g.current_user
            new_fav = Favourites(car_id, user.id)
            db.session.add(new_fav)
            db.session.commit()
            return jsonify({"message": "Requested car was successfully added to the user's favourites"}), 201
        except Exception as e:
            return jsonify({"message": str(e)}), 500
    else:
        return jsonify({"message": "The requested car does not exist"}), 404


@app.route("/api/search", methods=["GET"])
@token_required
def search():
    """
    Searches for cars by make and model if provided in the query string. 
    The search is case-insensitive.

    Args:
        None

    Returns:
        The search results or 404 if none of the cars meet the criteria  

    """

    make = request.args.get("make")
    model = request.args.get("model")

    query_res = None

    # filter by the criteria that was given
    if make and model:
        query_res = Cars.query.filter(and_(Cars.make.ilike(
            f"%{make}%"), Cars.model.ilike(f"%{model}%"))).all()
    elif make:
        query_res = Cars.query.filter(Cars.make.ilike(f"%{make}%")).all()
    elif model:
        query_res = Cars.query.filter(Cars.model.ilike(f"%{model}%")).all()
    else:
        query_res = Cars.query.all()

    if query_res:
        res = CarsSerializer(many=True).dump(query_res)
        return jsonify(res), 200
    else:
        return jsonify({"message": "No cars found"}), 404


@app.route("/api/users/<int:user_id>", methods=["GET"])
@token_required
def get_user_details(user_id):
    """
    Gets the details of a single user

    Args:
        user_id(int):   The user's ID

    Returns:
        The user if found or 404 if the user was not found. 
        If the current user does not match the requested user an unauthorized message is returned
    """

    user = g.current_user

    if user.id == user_id:
        query_res = UserModel.query.get(user_id)
        if query_res:
            res = UsersSerializer().dump(query_res)
            return jsonify(res), 200
        else:
            return jsonify({"message": " The requested user does not exist"}), 404
    else:
        return jsonify({"message": "users only have access to their own profile"}), 401


@app.route("/api/users/<int:user_id>/favourites", methods=["GET"])
@token_required
def get_favourite_cars(user_id):
    """
    Gets the favourites cars of the current user

    Args:
        user_id(int):    The user's ID

    Returns:
        The cars if the user has favourited cars or 404 if there are no favourite cars.
        If the current user does not match the requested user an unauthorized message is returned
    """

    user = g.current_user

    if user.id == user_id:
        query_res = Cars.query.join(
            Favourites).filter_by(user_id=user_id).all()
        if query_res:
            res = CarsSerializer(many=True).dump(query_res)
            return jsonify(res), 200
        else:
            return jsonify({"message": "No favourites found"}), 404
    else:
        return jsonify({"message": "users only have access to their own favourites"}), 401


@app.after_request
def add_header(response):
    """
    Add CORS and other headers after each request
    """
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=0'
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    return response


# convert errors to JSON so that the frontend can always expect JSON

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

    return jsonify({"token": token}), 200
