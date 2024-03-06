"""
Module providing components regarding the api documentation tool.
"""

from flask_smorest import Blueprint

# the Flask blueprint made for api documentation webpages
apidoc = Blueprint("default", __name__, url_prefix="/api", description="Default namespace")
