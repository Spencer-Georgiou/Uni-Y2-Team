"""
Module that provide apis to manipulate tables.
"""
from flask.views import MethodView
from flask_smorest import abort

from src import models
from src.apidoc import apidoc
from src.models import db
from src.schema import TableSchema


@apidoc.route("/table")
class Table(MethodView):
    """
    Class that provide apis to manipulate table instances at "/table".
    """
    MSG_NO_SUCH_TABLE = "Table does not exist."

    @apidoc.arguments(schema=TableSchema(only=("number",)), location="query")
    @apidoc.response(status_code=200, schema=TableSchema)
    def get(self, table_from_request):
        """
        Return a table.

        - Return a table with the given number if it exists in the database.
        - Return 404 if the table is not found in the database.
        """

        table_in_db = db.session.query(models.Table).get(table_from_request.number)

        # raise 404 when order is not found
        if table_in_db is None:
            abort(404, message=Table.MSG_NO_SUCH_TABLE)

        return table_in_db
