"""
Module that runs the api server.

The urls of api are prefixed with '/api' and return a json.
"""

from . import flask_app
from . import demo

if __name__ == '__main__':
    flask_app.run(debug=True)
