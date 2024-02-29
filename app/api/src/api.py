"""
Module that runs the api server.

The urls of api are prefixed with '/api' and return a json.
"""

from flask import Flask
from .apidoc import apidoc
from .config import DevelopmentConfig
from src.models.base import db
from flask_smorest import Api


def create_app(config=DevelopmentConfig):
    """
    Create a flask application with the given configurations. The default configuration is set
    for Deployment environment.

    For example, the application can be used for development with a development config,
    or for deployment if a deployment config is given.
    """
    # initialize the flask application
    app = Flask(__name__)
    # set up the global application context to avoid manually creating a context everytime when
    # calling the database
    app.app_context().push()
    # configure the flask app with the given config
    app.config.from_object(config)

    # initialize the database and create all schemas
    db.init_app(app)
    db.create_all()
    # create model instances when in development mode
    if config == DevelopmentConfig:
        from .migrate import migrate
        migrate()

    from . import services

    # a flask-smorest API instance that is a wrapper of a Flask app
    api = Api(app)
    # activate the apidoc blueprint and the corresponding apidoc
    api.register_blueprint(apidoc)
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
