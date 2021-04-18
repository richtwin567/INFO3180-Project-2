from dotenv import load_dotenv
import os

load_dotenv()

class Config(object):
    SECRET_KEY = os.environ.get("SECRET_KEY") or 'se%^&!70DCRETk*y'
    SQLALCHEMY_DATABASE_URI = os.environ.get("DB_URL") or 'postgresql://yourusername:yourpassword@localhost/databasename'    
    DEBUG = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_ACCESS_LIFESPAN = {'hours': 24}
    JWT_REFRESH_LIFESPAN = {'days': 30}
    UPLOAD_FOLDER = "uploads"
    
class DevelopmentConfig(Config):
    """Development Config that extends the Base Config Object"""
    DEVELOPMENT = True
    DEBUG = True

class ProductionConfig(Config):
    """Production Config that extends the Base Config Object"""
    DEBUG = False