from .models import Users, Favourites, Cars
from app import ma
from flask_marshmallow.sqla import SQLAlchemyAutoSchema

""" Serializers to convert each model to JSON data """

class CarsSerializer(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Cars
        include_fk = True
        
class UsersSerializer(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Users
        
class FavouritesSerializer(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Favourites
        
    user = ma.Nested(UsersSerializer)
    car = ma.Nested(CarsSerializer)
    
    