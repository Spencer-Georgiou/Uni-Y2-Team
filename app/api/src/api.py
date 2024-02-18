"""
Module that runs the api server.

The urls of api are prefixed with '/api' and return a json.
"""

from flask import Flask
from .apidoc import apidoc_bp
from .config import DeploymentConfig
from .model import db


def create_app(config=DeploymentConfig):
    """
    Create a flask application with the given configurations. The default configuration is set
    for Deployment environment.

    For example, the application can be used for development with a development config,
    or for deployment if a deployment config is given.
    """
    # initialize the flask application
    app = Flask(__name__)
    # configure the flask app with the given config
    app.config.from_object(config)

    # initialize the database and create all schemas
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # import modules containing apis after this line
    from . import demo
    # end of import api modules

    # activate the apidoc blueprint and the corresponding apidoc
    app.register_blueprint(apidoc_bp)
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
