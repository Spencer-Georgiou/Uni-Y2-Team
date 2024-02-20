"""
Module providing components regarding the api documentation tool.
"""

from flask import Blueprint
from flask_restx import Api

# the Flask blueprint made for api documentation webpages
apidoc_bp = Blueprint('apidoc', __name__)
# a flask-restx API instance that is a wrapper of a Flask app, or a blueprint to generate
# documentations
apidoc = Api(apidoc_bp, prefix='/api')
