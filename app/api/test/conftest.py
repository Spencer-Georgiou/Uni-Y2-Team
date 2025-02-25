"""
Module that provides the fixtures for pytest tests.
"""

import pytest

import src.models
from src import create_app
from src.config import TestingConfig
from src.models.user import hash_pwd


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
    db = src.models.db
    yield db
    db.session.rollback()


from src.models import Allergen
from src.models import Kitchen
from src.models import MenuGroup
from src.models import MenuItem
from src.models import Order
from src.models import Session
from src.models import Table
from src.models import Waiter
from src.models import Customer


@pytest.fixture
# a Customer instance
def customer():
    return Customer(username="Robert", password=hash_pwd("123456"))


# a Waiter instance
@pytest.fixture
def waiter():
    return Waiter(username="Kate", password=hash_pwd("123456"))


# a Kitchen instance
@pytest.fixture
def kitchen():
    return Kitchen(username="Jenny", password=hash_pwd("123456"))


# a Session instance for customer
@pytest.fixture
def session_for_customer(customer):
    return Session(user=customer, token="abcde")


# a Session instance for waiter
@pytest.fixture
def session_for_waiter(waiter):
    return Session(user=waiter, token="abcde")


# a Session instance for kitchen
@pytest.fixture
def session_for_kitchen(kitchen):
    return Session(user=kitchen, token="abcde")


# a MenuGroup instance
@pytest.fixture
def menugroup():
    return MenuGroup(type=MenuGroup.Type.FOOD, category=MenuGroup.Category.STARTER)


# a Allergen instance
@pytest.fixture
def allergen():
    return Allergen(name="Gluten")


# a MenuItem instance
@pytest.fixture
def menuitem(menugroup):
    return MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                    calorie=600, price=5.00, menugroup=menugroup)


@pytest.fixture
def table():
    return Table(number=10)


# an order that is created but not confirmed yet
@pytest.fixture
def order_confirming(table):
    return Order(table=table)


# an order in preparing that is confirmed by and assigned to a waiter
@pytest.fixture
def order_preparing(table, waiter):
    return Order(table=table, waiter=waiter)
