"""
Module that provides configurations for a flask app.
"""
from pathlib import Path

from dotenv import dotenv_values


class BaseConfig:
    """
    Configurations from native flask package for the Flask application.
    """
    # load environment variables from .flaskenv
    flask_env_config_path = Path(__file__).parent.parent.joinpath('.flaskenv').resolve()
    flask_env_config = dotenv_values(flask_env_config_path)
    # set host and port number
    HOST = flask_env_config['FLASK_RUN_HOST']
    PORT = flask_env_config['FLASK_RUN_PORT']


class ApiConfig:
    """
    Flask configuration for api documents.
    Refer to https://flask-smorest.readthedocs.io/en/latest/openapi.html for more information.
    """
    API_TITLE = "API"
    API_VERSION = "1.0"
    OPENAPI_VERSION = "3.1.0"
    OPENAPI_URL_PREFIX = "/"
    OPENAPI_SWAGGER_UI_PATH = "/"
    OPENAPI_SWAGGER_UI_URL = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"


class DevelopmentConfig(BaseConfig, ApiConfig):
    """
    Flask configuration used in Deployment.
    """
    SQLALCHEMY_DATABASE_URI = "sqlite://"
    SQLALCHEMY_ECHO = False


class TestingConfig(BaseConfig, ApiConfig):
    """
    Flask configuration used in Testing.
    """
    SQLALCHEMY_DATABASE_URI = "sqlite://"
    SQLALCHEMY_ECHO = True
