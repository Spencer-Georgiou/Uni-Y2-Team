"""
Testing table apis.
"""
from src.schema import TableSchema


class TestTable:
    # A get request to "api/table" should return the table with the given number.
    def test_get_table_valid_number(self, client, db, table):
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
