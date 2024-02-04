"""
Package providing APIs for OAXACA resturant management system.
"""

from flask import Flask
from flask import Blueprint
from flask_restx import Api

flask_app = Flask(__name__)
# The url for api documentation is '/api'.
flask_api = Api(flask_app, doc="/api")
