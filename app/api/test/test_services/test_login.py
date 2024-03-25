"""
Testing Login API.
"""
from src.services import Login
from src.models import Session


class TestLogin:
    # A POST to "api/login" should verify login credentials
    def test_waiter_success(self, client, db, waiter):
        db.session.add(waiter)
        db.session.commit()

        response = client.post("/api/login", json={
            "username": "Kate",
            "password": "123456"
        })

        assert response.status_code == 200
        assert response.get_json()["role"] == "waiter"

    def test_kitchen_success(self, client, db, kitchen):
        db.session.add(kitchen)
        db.session.commit()

        response = client.post("/api/login", json={
            "username": "Jenny",
            "password": "123456"
        })

        assert response.status_code == 200
        assert response.get_json()["role"] == "kitchen"

    def test_incorrect_creds(self, client, db, waiter, kitchen):
        db.session.add_all([waiter, kitchen])
        db.session.commit()

        response = client.post("/api/login", json={
            "username": "NotAUser",
            "password": "NotAPass"
        })

        assert response.status_code == 401
        assert response.get_json()["message"] == Login.MSG_INVALID_CREDS

    def test_new_session(self, client, db, kitchen):
        db.session.add(kitchen)
        db.session.commit()

        client.post("/api/login", json={
            "username": "Jenny",
            "password": "123456"
        })

        sessions1 = db.session.query(Session).filter_by(user_username="Jenny").all()
        token1 = sessions1[0].token

        client.post("/api/login", json={
            "username": "Jenny",
            "password": "123456"
        })
        
        sessions2 = db.session.query(Session).filter_by(user_username="Jenny").all()
        token2 = sessions2[0].token

        # a user should never have >1 sessions
        assert len(sessions1) == len(sessions2) == 1
        # different sessions should have different tokens
        assert token1 != token2
