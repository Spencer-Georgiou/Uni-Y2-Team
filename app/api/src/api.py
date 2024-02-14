"""
Module that runs the api server.

The urls of api are prefixed with '/api' and return a json.
"""

from flask import Flask
from src.apidoc import apidoc_bp


def create_app(config_filename=None):
    """
    Create a flask application with the given configurations.

    For example, the application can be used for development with a development config,
    or for deployment if a deployment config is given.
    """
    # initialize the flask application
    app = Flask(__name__)
    # configure the flask application if provided
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite://"
    app.config['SQLALCHEMY_ECHO'] = True

    from .model import db
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # import modules containing apis after this line
    from . import demo
    from . import menu
    # end of import api modules

    # activate the apidoc blueprint and the corresponding apidoc
    app.register_blueprint(apidoc_bp)
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
