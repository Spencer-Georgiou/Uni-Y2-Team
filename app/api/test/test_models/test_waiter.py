class TestWaiter:
    # An instance of kitchen can be created and stored in the database.
    def test_create_waiter(self, db, waiter):
        db.session.add(waiter)
        db.session.commit()

    # A kitchen can refer to its associated session.
    def test_relationship_session(self, db, waiter, session_for_waiter):
        db.session.add_all([waiter, session_for_waiter])
        db.session.commit()

        assert waiter.session is session_for_waiter
