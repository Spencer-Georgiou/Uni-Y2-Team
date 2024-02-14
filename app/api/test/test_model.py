"""
Testing data models.
"""
from src.model import Allergen
from src.model import MenuItem
from src.model import User
from src.model import Session
from datetime import datetime


class TestUser:
    # An instance of a user object can be created and stored in the database.
    def test_create_user(self, db):
        user = User(username="Kate", password="123456")
        db.session.add(user)
        db.session.commit()

    # A user can refer to its associated session.
    def test_relationship_session(self, db):
        user = User(username="Kate", password="123456")
        session = Session(user=user, token="abcde")
        db.session.add(user)
        db.session.add(session)
        db.session.commit()
        assert user.session is session


class TestSession:
    # An instance of a session object can be created and stored in the database.
    def test_create_session(self, db):
        user = User(username="Kate", password="123456")
        session = Session(user=user, token="abcde")
        db.session.add(session)
        db.session.commit()

    # A session can refer to its associated user.
    def test_relationship_user(self, db):
        user = User(username="Kate", password="123456")
        session = Session(user=user, token="abcde")
        db.session.add(user)
        db.session.add(session)
        db.session.commit()
        assert session.user is user


class TestAllergen:
    # An instance of an allergen object can be created and stored in the database.
    def test_create_allergen(self, db):
        allergen = Allergen(name="gluten")
        db.session.add(allergen)
        db.session.commit()

    # An allergen can be associated with at least one menu item.
    def test_relationship_menuitem(self, db):
        allergen = Allergen(name="gluten")
        menu_item = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                             calorie=600, price=5.00)
        allergen.menu_items.append(menu_item)
        db.session.add(allergen)
        db.session.add(menu_item)
        db.session.commit()


class TestMenuItem:
    # An instance of a MenuItem can be created then stored to the database.
    def test_create_menuitem(self, db):
        menu_item = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                             calorie=600, price=5.00)
        db.session.add(menu_item)
        db.session.commit()
