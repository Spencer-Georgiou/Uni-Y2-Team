"""
Module that provides configurations for a flask app.
"""


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


class DevelopmentConfig(ApiConfig):
    """
    Flask configuration used in Deployment.
    """
    SQLALCHEMY_DATABASE_URI = "sqlite://"
    SQLALCHEMY_ECHO = False


class TestingConfig(ApiConfig):
    """
    Flask configuration used in Testing.
    """
    SQLALCHEMY_DATABASE_URI = "sqlite://"
    SQLALCHEMY_ECHO = True
