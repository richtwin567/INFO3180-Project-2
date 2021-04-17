from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from app.config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)

#print(dir(db))

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

from app.routes import routes



