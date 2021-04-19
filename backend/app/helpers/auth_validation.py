"""Helper functions for Server Side Validation."""
import re


def validate_email(user_model, email):
    """Validate User email addresses.

    Args:
        user_model(UserModel): The SQLAlchemy database model for a user
        email(str): The email address of the user

    Returns:
        (bool) True if the email is valid
        (dict) A dictionary containing the response if the email is not valid

    """
    # Check if valid email address is entered if client side validation fails
    regex = '^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$'

    if re.search(regex, email) is None:
        return {'message': f'Invalid email address {email}'}

    # Check if a user with the email address already exists
    user = user_model.query.filter_by(email=email).first()

    if user is not None:
        return {'message': f'Email address {email} is already in use'}

    return True
