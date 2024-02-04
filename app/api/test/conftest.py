"""
Module that provides the fixtures for pytest tests.
"""

import pytest
from src import flask_app

# the flask application instance
@pytest.fixture
def app():
    yield flask_app

# the mock client
@pytest.fixture
def client(app):
    return app.test_client()

# the cli runner
@pytest.fixture()
def runner(app):
    return app.test_cli_runner()