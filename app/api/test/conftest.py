"""
Module that provides the fixtures for pytest tests.
"""

import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import Session as DBSession

from src import flask_app
from src.model import Base


# the flask application instance
@pytest.fixture
def app():
    yield flask_app


# the flask mock client
@pytest.fixture
def client(app):
    return app.test_client()


# the flask cli runner
@pytest.fixture()
def runner(app):
    return app.test_cli_runner()


# the in-memory mock database
@pytest.fixture()
def engine():
    engine = create_engine("sqlite://", echo=True)
    Base.metadata.create_all(engine)
    return engine


# the session that can apply changes to the mock database
@pytest.fixture()
def session(engine):
    session = DBSession(engine)
    yield session
    session.close()
