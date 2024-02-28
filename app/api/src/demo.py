"""
Module providing an example to show flask and flask-restx
"""

from flask.views import MethodView
from .apidoc import apidoc


@apidoc.route("/demo")
class Demo(MethodView):
    """
    A sample class.
    """

    def get(self):
        """
        Return a dict with key message in json format.
        """
        return {"message": "I'm an api demo."}
