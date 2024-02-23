from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, RoleMixin
from sqlalchemy.exc import SQLAlchemyError
import secrets

# Configuration
app = Flask(__name__)
app.config.update(
    SQLALCHEMY_DATABASE_URI='sqlite:///database.db',
    SECRET_KEY=secrets.token_hex(32),  # Generate a 32-byte (64-character) hexadecimal string
    SECURITY_PASSWORD_SALT=secrets.token_hex(16),  # Generate a 16-byte (32-character) hexadecimal string
    SECURITY_PASSWORD_HASH='bcrypt'
)
db = SQLAlchemy(app)

# Define user and role models
roles_users = db.Table('roles_users',
                       db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
                       db.Column('role_id', db.Integer(), db.ForeignKey('role.id')))


class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    active = db.Column(db.Boolean())
    roles = db.relationship('Role', secondary=roles_users, backref=db.backref('users', lazy='dynamic'))


# Setup Flask-Security
user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)


# API route for login
@app.route('/api/user/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        if not data or 'username' not in data or 'password' not in data:
            return jsonify({'error_message': 'Missing username or password'}), 400

        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()

        if not user:
            return jsonify({'error_message': 'Username does not exist'}), 401

        if not user_datastore.check_password_hash(user.password, password):
            return jsonify({'error_message': 'Password is wrong'}), 401

        return jsonify({'status_code': 200, 'session_key': 'your_session_key', 'error_message': None}), 200
    except SQLAlchemyError:
        return jsonify({'error_message': 'Database error occurred'}), 500
    except Exception as e:
        return jsonify({'error_message': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)

# INSTRUCTIONS-READ-ME
# Replace 'database.db' in SQLALCHEMY_DATABASE_URI with the database URI.
# Run the app and send POST requests to /api/user/login with 'username' and 'password' parameters to authenticate users.
