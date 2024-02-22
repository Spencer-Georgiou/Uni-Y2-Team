"""
Testing data models.
"""
from src.model import Allergen
from src.model import MenuGroup
from src.model import MenuItem
from src.model import Table
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
        allergen = Allergen(name="Gluten")
        db.session.add(allergen)
        db.session.commit()

    # An allergen can be associated with at least one menu item.
    def test_relationship_menuitem(self, db):
        menugroup = MenuGroup(type="Food", category="Starter")
        allergen = Allergen(name="Gluten")
        menuitem = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                            calorie=600, price=5.00, menugroup=menugroup)
        allergen.menuitems.append(menuitem)
        db.session.add(allergen)
        db.session.add(menuitem)
        db.session.commit()
        assert menuitem in allergen.menuitems


class TestMenuItem:
    # An instance of a MenuItem can be created then stored to the database.
    def test_create_menuitem(self, db):
        menugroup = MenuGroup(type="Food", category="Starter")
        menuitem = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                            calorie=600, price=5.00, menugroup=menugroup)
        db.session.add(menuitem)
        db.session.commit()

    # A menu item can have one allergen.
    def test_relationship_allergen(self, db):
        menugroup = MenuGroup(type="Food", category="Starter")
        allergen = Allergen(name="Gluten")
        menuitem = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                            calorie=600, price=5.00, menugroup=menugroup)
        menuitem.allergens.append(allergen)
        db.session.add(allergen)
        db.session.add(menuitem)
        db.session.commit()
        assert allergen in menuitem.allergens

    # A menu item can be associated with a menu group.
    def test_relationship_menugroup(self, db):
        menugroup = MenuGroup(type="Food", category="Starter")
        menuitem = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                            calorie=600, price=5.00, menugroup=menugroup)
        db.session.add(menuitem)
        db.session.add(menugroup)
        db.session.commit()

        assert menuitem.menugroup is menugroup


class TestMenuGroup:
    # An instance of menu group can be created and stored in the database.
    def test_create_menugroup(self, db):
        menugroup = MenuGroup(type="Food", category="Starter")
        db.session.add(menugroup)
        db.session.commit()

    # A menu group can contain one menu item.
    def test_relationship_menuitem(self, db):
        menugroup = MenuGroup(type="Food", category="Starter")
        menuitem = MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                            calorie=600, price=5.00, menugroup=menugroup)
        db.session.add(menuitem)
        db.session.add(menugroup)
        db.session.commit()

        assert menuitem in menugroup.menuitems


class TestTable:
    # An instance of table can be created and stored in the database.
    def test_create_table(self, db):
        table = Table(number=10)
        db.session.add(table)
        db.session.commit()
