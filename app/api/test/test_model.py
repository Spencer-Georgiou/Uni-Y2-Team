"""
Testing data models.
"""
from src.model import User
from src.model import Session
from datetime import datetime


class TestUser:
    # An instance of a user object can be created and stored in the database.
    def test_user_creation(self, db):
        user = User(username="Kate", password="123456")
        db.session.add(user)
        db.session.commit()

    # A user can refer to its associated session.
    def test_user_relationship_session(self, db):
        user = User(username="Kate", password="123456")
        session = Session(user=user, token="abcde")
        db.session.add(user)
        db.session.add(session)
        db.session.commit()
        assert user.session is session


class TestSession:
    # An instance of a session object can be created and stored in the database.
    def test_session_creation(self, db):
        user = User(username="Kate", password="123456")
        session = Session(user=user, token="abcde")
        db.session.add(session)
        db.session.commit()

    # A session can refer to its associated user.
    def test_session_relationship_user(self, db):
        user = User(username="Kate", password="123456")
        session = Session(user=user, token="abcde")
        db.session.add(user)
        db.session.add(session)
        db.session.commit()
        assert session.user is user
        print(session)
