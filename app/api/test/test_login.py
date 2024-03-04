import secrets
import pytest
from login import app, db, User

# test to see if secrets module can generate a 16-byte (32-character) hexadecimal string
password_salt = secrets.token_hex(16)
print(password_salt)


@pytest.fixture
def client():
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
            # Add a test user
            test_user = User(username='test_user', password='test_password')
            db.session.add(test_user)
            db.session.commit()
        yield client
        db.session.remove()
        db.drop_all()


def test_login(client):
    # Test successful login
    response = client.post('/api/user/login', json={'username': 'test_user', 'password': 'test_password'})
    assert response.status_code == 200
    assert b'session_key' in response.data
    assert b'error_message' in response.data

    # Test wrong password
    response = client.post('/api/user/login', json={'username': 'test_user', 'password': 'wrong_password'})
    assert response.status_code == 401
    assert b'error_message' in response.data

    # Test non-existing user
    response = client.post('/api/user/login', json={'username': 'non_existing_user', 'password': 'password'})
    assert response.status_code == 401
    assert b'error_message' in response.data
