from src.models import Session
from sqlalchemy.exc import IntegrityError
import pytest


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

    # Two sessions cannot associate with the same user.
    def test_avoid_relationship_same_user(self, db, session_for_waiter):
        # when a session in the database
        db.session.add(session_for_waiter)
        db.session.commit()

        # create another session pointing to the same user should raise an error
        with pytest.raises(IntegrityError):
            another_session = Session(user_username=session_for_waiter.user_username,
                                      token="abcde")
            db.session.add(another_session)
            db.session.commit()
