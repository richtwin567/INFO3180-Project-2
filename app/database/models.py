from app import db
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime

""" The database models """


class UserModel(db.Model):
    __tablename__ = "users"

    # columns
    id = db.Column(
        db.Integer,
        primary_key=True
    )

    username = db.Column(
        db.String(255),
        unique=True
    )

    password = db.Column(
        db.String(255)
    )

    name = db.Column(
        db.String(255)
    )

    email = db.Column(
        db.String(255),
        unique=True
    )

    location = db.Column(
        db.String(255)
    )

    biography = db.Column(
        db.String(255)
    )

    photo = db.Column(
        db.String(255)
    )

    date_joined = db.Column(
        db.DateTime
    )

    def __init__(self, username, biography, email, location, name, password, photo):
        self.username = username
        self.biography = biography
        self.date_joined = datetime.now()
        self.email = email
        self.location = location
        self.name = name
        self.password = generate_password_hash(
            password, method='pbkdf2:sha256')
        self.photo = photo

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return str(self.id)  # python 3 support


class Cars(db.Model):
    __tablename__ = "cars"

    # columns

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    description = db.Column(
        db.String(255)
    )

    make = db.Column(
        db.String(255)
    )

    model = db.Column(
        db.String(255)
    )

    colour = db.Column(
        db.String(255)
    )

    year = db.Column(
        db.String(255)
    )

    transmission = db.Column(
        db.String(255)
    )

    car_type = db.Column(
        db.String(255)
    )

    price = db.Column(
        db.Numeric(10, 2, asdecimal=False)
    )

    photo = db.Column(
        db.String(255)
    )

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id")
    )

    def __init__(self, description, make, model, colour, year, transmission, car_type, price, photo, user_id):
        self.description = description
        self.make = make
        self.model = model
        self.colour = colour
        self.year = year
        self.transmission = transmission
        self.car_type = car_type
        self.price = price
        self.photo = photo
        self.user_id = user_id


class Favourites(db.Model):
    __tablename__ = "favourites"

    # columns
    id = db.Column(
        db.Integer,
        primary_key=True
    )

    car_id = db.Column(
        db.Integer,
        db.ForeignKey("cars.id")
    )

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id")
    )

    def __init__(self, car_id, user_id):
        self.car_id = car_id
        self.user_id = user_id


db.create_all()
