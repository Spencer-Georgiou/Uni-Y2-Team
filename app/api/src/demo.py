"""
Module providing an example to show the use of flask and flask-restx
"""

from flask_restx import Resource
from .apidoc import apidoc


@apidoc.route("/api/demo")
class Demo(Resource):
    """
    A sample class.
    """

    def get(self):
        """
        Return a dict with key message in json format.
        """
        return {"message": "I'm an api demo."}
