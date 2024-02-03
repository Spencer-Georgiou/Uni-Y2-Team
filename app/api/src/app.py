from flask import Flask
from flask_restx import Api, Resource

app = Flask(__name__)
# The url for api documentation is '/api'.
# All api must have its url starting with '/api' and return a json.
api = Api(app, doc="/api", prefix="/api")

@api.route('/demo')
class Demo(Resource):
    def get(self):
        return {"message": "I'm an api demo."}

