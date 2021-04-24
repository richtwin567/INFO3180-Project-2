
from flask import Flask

from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import wtforms_json
from flask_wtf import CSRFProtect

from app.config import Config

app = Flask(__name__, static_folder='frontend/dist', static_url_path='/')
app.config.from_object(Config)

db = SQLAlchemy(app)
ma = Marshmallow(app)
csrf = CSRFProtect()
wtforms_json.init()
#csrf.init_app(app)
db.create_all()
# not sure if we will be using Flask-Login at all
# Since the frontend will be separate from the backend,
# we wouldn't really be able to use Flask-Login

# Authentication will really be the same as it was
# for our prior projects

# login_manager = LoginManager()
# login_manager.init_app(app)
from app.routes import routes
from app.routes import auth_routes
