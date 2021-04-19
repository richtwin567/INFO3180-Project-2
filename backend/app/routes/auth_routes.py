"""The routes required for authentication."""
# Builtin modules
from datetime import datetime, timedelta

# Flask Imports
import jwt
from flask import Blueprint, json, jsonify, request, make_response, abort

# User defined modules
from app import app, db
from app.database.models import UserModel

# Create Blueprint to modularize routing
auth_route = Blueprint('auth', __name__)


@auth_route.route('/login', methods=['POST'])
def login():
    """Route for handling user login.

    Args:
        None
    Returns:
        A JSON response with the JWT if the user is succesfully logged in
        and a 200 response code.
        If the user data is invalid or not found, a 401 response is
        returned
    """
    # Retrieve login details from request
    req = request.get_json(force=True)
    username = req.get('username')
    password = req.get('password')

    # Check if the fields were successfully recieved, if not return a 401
    if username is None or password is None:
        return make_response(
            'Could not verify user',
            401,
            {'WWW-Authenticate': 'Basic realm ="Login details required"'})

    user = UserModel.query.filter_by(username=username).first()

    # Return a 401 if no user is found
    if user is None:
        return abort(make_response(
            {"message": 'Could not verify user'},
            401,
            {'WWW-Authenticate': 'Basic realm ="User does not exist"'}))

    # Verify user password
    if user.check_password(password) is True:
        expiry_time = app.config.get('JWT_ACCESS_LIFESPAN').get('hours')

        # Generate the JWT Token
        token = jwt.encode({
            'public_id': user.public_id,
            'exp': datetime.utcnow() + timedelta(hours=expiry_time),
            'admin': user.is_admin
        }, app.config.get('SECRET_KEY'), algorithm="HS256")

        return make_response(jsonify(
            {
                'message': 'Login Successful',
                'token': token
            }), 200)
    else:
        return make_response(
            {'message': 'Incorrect password'},
            401,
            {'WWW-Authenticate': 'Basic realm="Wrong password"'}
        )


# Register the blueprints
app.register_blueprint(auth_route, url_prefix='/api/auth')
