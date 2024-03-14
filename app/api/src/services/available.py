from flask import request
from sqlalchemy.exc import SQLAlchemyError
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
            available = data.get('available')

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