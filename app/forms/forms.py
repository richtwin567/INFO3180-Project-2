from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired, FileAllowed
from wtforms.fields.core import DecimalField, StringField
from wtforms.fields.simple import PasswordField, TextAreaField
from wtforms.validators import DataRequired, Email

# forms for validating data sent to routes


def create_uname_field():
    return StringField('Username', validators=[DataRequired()])


def create_photo_field():
    return FileField(label="Photo", validators=[FileRequired(), FileAllowed(['jpg', 'png'], "Only images are accepted")])


def create_password_field():
    return PasswordField("Password", validators=[DataRequired()])


class RegistrationForm(FlaskForm):

    username = create_uname_field()
    password = create_password_field()
    fullname = StringField('Fullname', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    location = StringField('Location', validators=[DataRequired()])
    biography = TextAreaField(label="Biography", validators=[DataRequired()])
    photo = create_photo_field()


class LoginForm(FlaskForm):

    username = create_uname_field()
    password = create_password_field()


class NewCarForm(FlaskForm):

    make = StringField(validators=[DataRequired()])
    model = StringField(validators=[DataRequired()])
    colour = StringField(validators=[DataRequired()])
    year = StringField(validators=[DataRequired()])
    price = DecimalField(validators=[DataRequired()])
    car_type = StringField(validators=[DataRequired()])
    transmission = StringField(validators=[DataRequired()])

    description = TextAreaField(validators=[DataRequired()])
    photo = create_photo_field()
