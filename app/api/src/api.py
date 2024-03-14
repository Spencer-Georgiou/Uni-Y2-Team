"""
Module that runs the api server.

The urls of api are prefixed with '/api' and return a json.
"""

from src import create_app

if __name__ == '__main__':
    app = create_app()
    app.run(host=app.config["HOST"], port=app.config["PORT"], debug=True, ssl_context='adhoc')
