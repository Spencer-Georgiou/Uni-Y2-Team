"""
Testing menu apis.
"""
from src.model import User


class TestRegister:
    # Test if the get response to the register API returns correct message and status code for each condition
    def test_get(self, client, db):
        user = User(username="user", password="pass")
        db.session.add_all([user])
        db.session.commit()

        response = client.get("/api/register")
        assert response.status_code == 403
        assert response == "Failed"

        response = client.get("/api/register")
        assert response.status_code == 200
        assert response == "Success"
        all_users = db.session.query(User).all()
        assert user in all_users
