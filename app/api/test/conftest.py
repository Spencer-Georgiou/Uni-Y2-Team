"""
Module that provides the fixtures for pytest tests.
"""

import pytest
import src.model
from src.api import create_app
from src.config import TestingConfig


# the flask application instance
@pytest.fixture
def app():
    # Create a flask app for testing
    return create_app(config=TestingConfig)


# the flask mock client
@pytest.fixture
def client(app):
    return app.test_client()


# the flask cli runner
@pytest.fixture()
def runner(app):
    return app.test_cli_runner()


# the database descriptor
@pytest.fixture()
def db(app):
    db = src.model.db
    yield db
    db.session.rollback()
