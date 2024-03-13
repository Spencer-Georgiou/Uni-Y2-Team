"""
Testing menu apis.
"""
from src import services
from src import models


class TestUser:
    # Test if the get response to the register API returns correct message and status code for each condition
    def test_post(self, client, db):
        user = User(username="existing_user", password="pass")
        db.session.add(user)
        db.session.commit()

        response = client.post("/api/register", json={
            "username": "existing_user",
            "password": "pass",
        })
        assert response.status_code == 403
        assert response == "User already exists."

        response = client.post("/api/register", json={
            "username": "new_user",
            "password": "pass",
        })
        assert response.status_code == 200
        all_users = db.session.query(User).all()
        assert user in all_users