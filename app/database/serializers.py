from .models import Users, Favourites, Cars
from app import ma
from flask_marshmallow.sqla import SQLAlchemyAutoSchema

class CarsSerializer(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Cars
        include_fk = True
        
class UserSerializer(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Users
        
class FavouritesSerializer(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Favourites
        
    user = ma.Nested(UserSerializer)
    car = ma.Nested(CarsSerializer)
    
    