from src.model import Allergen
from src.model import MenuGroup
from src.model import MenuItem
from src.model import Order
from src.model import Table
from src.model import User
from src.model import Session
import pytest

from src.model import Waiter


# a User instance
@pytest.fixture
def waiter():
    return Waiter(username="Kate", password="123456")


# a Session instance
@pytest.fixture
def session(waiter):
    return Session(user=waiter, token="abcde")


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
