class TestSession:
    # An instance of a session object can be created and stored in the database.
    def test_create_session(self, db, session_for_waiter):
        db.session.add(session_for_waiter)
        db.session.commit()

    # A session can refer to its associated waiter.
    def test_relationship_user(self, db, waiter, session_for_waiter):
        db.session.add_all([waiter, session_for_waiter])
        db.session.commit()

        assert session_for_waiter.user is waiter
