"""
Testing table apis.
"""
from src.schema import TableSchema
from src import services


class TestTable:
    # A get request to "api/table" should return the table with the given number.
    def test_get_table_by_valid_number(self, client, db, table):
        # when a table in the database
        db.session.add(table)
        db.session.commit()

        # then send a get request with the table number in query
        query = {"number": table.number}
        response = client.get("/api/table", query_string=query)

        # check whether the response contains the jsonified table
        expected = TableSchema().dump(table)
        assert response.status_code == 200
        assert response.get_json() == expected

    # A get request to "api/table" should return a 404 if the table does not exist.
    def test_get_table_by_invalid_number(self, client, table):
        # when no table in the database
        # then send a get request to /api/table
        query = {"number": table.number}
        response = client.get("/api/table", query_string=query)

        # check whether the response is 404 indicating no such an order
        assert response.status_code == 404
        assert response.get_json()["message"] == services.Table.MSG_NO_SUCH_TABLE
