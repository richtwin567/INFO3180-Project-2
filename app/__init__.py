from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from app.config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
ma = Marshmallow(app)

# not sure if we will be using Flask-Login at all
login_manager = LoginManager()
login_manager.init_app(app)

from app.routes import routes



