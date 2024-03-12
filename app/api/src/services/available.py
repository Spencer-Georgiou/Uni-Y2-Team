from flask import request
from src.apidoc import apidoc
from flask.views import MethodView

from src.models import MenuItem
from src.models import db

@apidoc.route("/menuitem")
class Available(MethodView):
    def patch(self):
        try:
            data = request.get_json()
            
            item_name = data.get('name')
            if data.get('available').lower() == "true": # .lower() in case frontend use "True"
                available = True
            else:
                available = False 

            item = db.session.query(MenuItem).filter_by(name=item_name).first()

            if item:
                item.available = available
                db.session.commit()
            else:
                return {"error_message": "Menu item not found"}, 400

            return {"error_message": None}
            
        except SQLAlchemyError:
            return {"error_message": "Database error occurred"}, 500
        except Exception as e:
            return {"error_message": str(e)}, 500