"""
Testing data models.
"""
from src.model import User


class TestUser:
    # An instance of a user object can be created and stored in the database.
    def test_user_creation(self, db):
        user = User(username="Kate", password="123456")
        db.session.add(user)
        db.session.commit()
