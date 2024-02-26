"""
Module that provides configurations for a flask app.
"""


class DevelopmentConfig(object):
    """
    Flask configuration used in Deployment.
    """
    SQLALCHEMY_DATABASE_URI = "sqlite://"
    SQLALCHEMY_ECHO = False


class TestingConfig(object):
    """
    Flask configuration used in Testing.
    """
    SQLALCHEMY_DATABASE_URI = "sqlite://"
    SQLALCHEMY_ECHO = True
