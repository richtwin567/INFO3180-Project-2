"""The routes required for authentication."""
# Builtin modules
from datetime import datetime, timedelta

# Flask Imports
import jwt
from flask import Blueprint, json, jsonify, request, make_response, abort

# User defined modules
from app import app, db
from app.database.models import UserModel
from app.helpers.auth_validation import validate_email
from app.routes.decorators import token_required

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


@auth_route.route('/register', methods=['POST'])
def register():
    """Route to retrieve details to sign a user up.

    Args:
        None
    Returns:
        response_code: 201 if the registration is succesful
                        401 if the user already exists

    """
    # Retrieve signup details from request
    req = request.get_json(force=True)

    # Retrieve username and email to check if they already exist
    username = req.get('username')
    email = req.get('email')

    # Retrieve other request fields for validation
    password = req.get('password')
    name = req.get('name')
    location = req.get('location')
    biography = req.get('biography')
    photo_path = req.get('photo')

    # Check if the user already exists
    username_check = UserModel.query.filter_by(username=username).first()

    # Validate the user's email address
    email_check = validate_email(UserModel, email)

    # If a user or email address is found, a 401 is sent to the client
    if username_check is not None:
        return make_response(
            {'message': f'Username {username} already exists'}, 401)

    elif email_check is not True:
        return make_response(email_check, 401)

    # Create user once validation checks are passed
    else:
        user = UserModel(
            name=name,
            username=username,
            password=password,
            email=email,
            biography=biography,
            photo=photo_path,
            location=location,
        )

        # Add the user to the database
        db.session.add(user)
        db.session.commit()

        # This probably doesn't work as yet
        return make_response({
            'message': "User Successfully registered",
            'user': {
                'id': user.id,
                'username': username,
                'name': name,
                'photo': email,
                'location': location,
                'biography': biography,
                'date_joined': user.date_joined
            }

        }, 201)


@auth_route.route("/api/auth/logout", methods=["POST"])
@token_required
def logout():
    """Log a user out.

    Args:
        None

    Returns:
        A 200 Response with a json object stating that the logout
        was successful

    """
    return make_response({
        "message": "Log out successful"
    }, 200)


# Register the blueprint
app.register_blueprint(auth_route, url_prefix='/api/auth')
