# Builtins imports
from functools import wraps

# Flask imports
from flask import json, request, jsonify, g, make_response, abort

# JWT imports
import jwt
from jwt.exceptions import (
    ExpiredSignatureError,
    DecodeError,
    InvalidSignatureError
)

# User defined imports
from app.database.models import UserModel
from app import app


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
            return jsonify(
                {'message': 'Authorization header is expected'}), 401

        parts = auth.split()

        if parts[0].lower() != 'bearer':
            return jsonify(
                {'message': 'Authorization header must start with Bearer'}
            ), 401

        elif len(parts) == 1:
            return jsonify({'message': 'Token not found'}), 401

        elif len(parts) > 2:
            return jsonify(
                {'message': 'Authorization header must be Bearer + \s + token'}
            ), 401

        token = parts[1]

        try:
            data = jwt.decode(token, app.config.get(
                'SECRET_KEY'), algorithms="HS256")

            # may be changed when auth is complete
            current_user = UserModel.query.get(data.get('id'))

            if not current_user:
                abort(make_response({"message": "Token is invalid, no user matched to token"}, 401))

        except InvalidSignatureError:
            abort(make_response({"message": 'Token is invalid'}, 401))

        except ExpiredSignatureError:
            abort(make_response({"message": 'Token is expired'}, 401))

        except DecodeError:
            return abort(make_response(
                {'message': 'Token signature is invalid'}, 401))

        g.current_user = current_user
        return f(*args, **kwargs)

    return decorated
