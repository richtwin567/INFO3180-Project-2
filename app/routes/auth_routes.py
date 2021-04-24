"""The routes required for authentication."""
# Builtin modules
import os
from datetime import datetime, timedelta

# Flask Imports
import jwt
from flask import Blueprint, json, jsonify, request, make_response, abort
from werkzeug.utils import secure_filename

# User defined modules
from app import app, db
from app.database.models import UserModel
from app.helpers.auth_validation import validate_email
from app.routes.decorators import token_required
from app.forms.forms import RegistrationForm, LoginForm

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
    # Retrieve json request
    req = request.get_json()

    # Initialize form form object
    form = LoginForm(meta={'csrf': False})
    print(form.data)

    # Initialize username and password to none, to prevent undefined error
    username = None
    password = None
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

    # Check if the fields were successfully recieved, if not return a 401
    if username is None or password is None:
        return make_response(
            {'error':
             'Username or password fields are empty'},
            401)

    user = UserModel.query.filter_by(username=username).first()

    # Return a 401 if no user is found
    if user is None:
        return abort(make_response(
            {"error": 'Could not verify user, the user does not exist'},
            401))

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
            401
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
    # Initialize the form
    form = RegistrationForm()

    if form.validate_on_submit():
        # Extract form fields
        username = form.username.data
        password = form.password.data
        email = form.email.data
        name = form.fullname.data
        location = form.location.data
        biography = form.biography.data
        photo = form.photo.data

        # Save the photo
        photo_path = secure_filename(photo.filename)
        path_joined = os.path.join(app.config['UPLOAD_FOLDER'], photo_path)
        photo.save(path_joined)

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
                    'photo': photo_path,
                    'email': email,
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
