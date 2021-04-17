from app.database.models import Users, Cars, Favourites
from flask_login import login_required, current_user
from app import app
from flask import request

@app.route("/api/register", methods=["POST"])
def register():
    pass

@app.route("/api/auth/login", methods=["POST"])
def login():
    pass

@app.route("/api/auth/logout", methods=["POST"])
def logout():
    pass

@app.route("/api/cars", methods=["GET", "POST"])
def handle_cars():
    if request.method=="GET":
        pass
    else:
        pass
    
@app.route("/api/cars/<car_id>", methods=["GET"])
def get_one_car(car_id):
    pass

@app.route("/api/cars/<car_id>/favourite", methods=["POST"])
def get_fav_car(car_id):
    pass

# I think something might be wrong with the instructions for this route
@app.route("/api/search", methods=["GET"])
def search():
    pass

@app.route("/api/users/<user_id>", methods=["GET"])
def get_user_details(user_id):
    pass

@app.route("/api/users/<user_id>/favourites")
def get_favourite_cars(user_id):
    pass
