"""
Testing data models.
"""
from src.model import User


class TestUser:
    # An instance of a user object can be created and stored in the database.
    def test_user_creation(self, session):
        user = User(username="Kate", password="123456")
        session.add(user)
        session.commit()
