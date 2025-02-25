class TestTable:
    # An instance of table can be created and stored in the database.
    def test_create_table(self, db, table):
        db.session.add(table)
        db.session.commit()

    # A table can be associated with at most one order.
    def test_relationship_order(self, db, table, order_confirming):
        db.session.add_all([table, order_confirming])
        db.session.commit()

        assert order_confirming is table.order

    # An empty table should be available.
    def test_empty_table_available(self, db, table):
        db.session.add(table)
        db.session.commit()

        assert True is table.is_available()

    # A table with an order should be unavailable.
    def test_occupied_table_available(self, db, table, order_confirming):
        db.session.add_all([table, order_confirming])
        db.session.commit()

        assert False is table.is_available()
