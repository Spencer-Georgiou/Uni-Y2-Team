"""
Module that runs the api server.

The urls of api are prefixed with '/api' and return a json.
"""

from src import create_app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
