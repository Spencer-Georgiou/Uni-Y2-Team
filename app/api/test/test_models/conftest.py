import pytest
from src.models import Allergen
from src.models import Kitchen
from src.models import MenuGroup
from src.models import MenuItem
from src.models import Order
from src.models import Session
from src.models import Table
from src.models import Waiter


# a Waiter instance
@pytest.fixture
def waiter():
    return Waiter(username="Kate", password="123456")


# a Kitchen instance
@pytest.fixture
def kitchen():
    return Kitchen(username="Jenny", password="123456")


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


@pytest.fixture
def order(table):
    return Order(table=table)


@pytest.fixture
def active_order(table):
    return Order(table=table, status=Order.Status.PREPARING)


@pytest.fixture
def inactive_order(table):
    return Order(table=table, status=Order.Status.FINISHED)
