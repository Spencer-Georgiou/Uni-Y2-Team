from flask import jsonify
import sqlite3
from flask_restx import Resource
from .apidoc import apidoc


@apidoc.route("/api/menu")
class Menu(Resource):
    def get(self):
        try:
            db = sqlite3.connect("database.db")
            cursor = db.cursor()
            cursor.execute('SELECT * FROM food_menu')
            menu_items = cursor.fetchall()

            menu_data = []
            for item in menu_items:
                item_dict = {
                    'item_id': item[0],
                    'item_name': item[1],
                    'description': item[2],
                    'price': item[3],
                    'calories': item[4],
                    'type': item[5],
                    'allergen': item[6],
                    'dietary': item[7],
                    'available': item[8]
                }
                menu_data.append(item_dict)

            db.close()

            return jsonify({"menu": menu_data})

        except Exception as e:
            return {"error": str(e)}, 500
