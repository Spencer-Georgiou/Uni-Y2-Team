class TestTable:
    # An instance of table can be created and stored in the database.
    def test_create_table(self, db, table):
        db.session.add(table)
        db.session.commit()

    # A table can be associated with many orders.
    def test_relationship_order(self, db, table, order):
        db.session.add_all([table, order])
        db.session.commit()

        assert order in table.orders

    # A table can show its active order.
    def test_show_active_order(self, db, table, active_order):
        db.session.add_all([table, active_order])
        db.session.commit()

        assert active_order is table.get_active_order()

    # A table should return None if it does not have any active order.
    def test_no_active_order(self, db, table, inactive_order):
        db.session.add_all([table, inactive_order])
        db.session.commit()

        assert None is table.get_active_order()

    # An empty table should be available.
    def test_empty_table_available(self, db, table):
        db.session.add(table)
        db.session.commit()

        assert True is table.is_available()

    # A table with an active order should be unavailable.
    def test_occupied_table_available(self, db, table, active_order):
        db.session.add_all([table, active_order])
        db.session.commit()

        assert False is table.is_available()
