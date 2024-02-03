"""
Module providing APIs for OAXACA resturant management system.
"""
from flask import Flask
from flask_restx import Api, Resource

app = Flask(__name__)
# The url for api documentation is '/api'.
# All api must have its url starting with '/api' and return a json.
api = Api(app, doc="/api", prefix="/api")

@api.route("/demo")
class Demo(Resource):
    """
    A sample class.
    """

    def get(self):
        """
        Return a dict with key message in json format.
        """
        return {"message": "I'm an api demo."}
