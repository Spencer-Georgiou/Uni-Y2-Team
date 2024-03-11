from src.models import Session


class TestWaiter:
    # An instance of waiter can be created and stored in the database.
    def test_create_waiter(self, db, waiter):
        db.session.add(waiter)
        db.session.commit()

    # A waiter can refer to its associated session.
    def test_relationship_session(self, db, waiter, session_for_waiter):
        db.session.add_all([waiter, session_for_waiter])
        db.session.commit()

        assert waiter.session is session_for_waiter

    # A session should be deleted when the associated user is deleted.
    def test_cascade_delete_sessionr(self, db, waiter, session_for_waiter):
        # when a waiter and its session in the database
        db.session.add_all([waiter, session_for_waiter])
        db.session.commit()

        # then delete the waiter
        db.session.delete(waiter)
        db.session.commit()

        # check whether the session in the database is removed
        session_in_db = db.session.query(Session).get(waiter.session.id)
        assert session_in_db is None
