from sqlalchemy.exc import IntegrityError
import pytest
from flask import url_for, request


class TestMenuItem:
    # An instance of a MenuItem can be created then stored to the database.
    def test_create_menuitem(self, db, menuitem):
        db.session.add(menuitem)
        db.session.commit()

    # A menuitem should not have a negative calorie.
    def test_no_menuitem_with_negative_calorie(self, db, menuitem):
        with pytest.raises(IntegrityError):
            menuitem.calorie = -200
            db.session.add(menuitem)
            db.session.commit()

    # A menuitem should not have a negative price.
    def test_no_menuitem_with_negative_calorie(self, db, menuitem):
        with pytest.raises(IntegrityError):
            menuitem.price = -10
            db.session.add(menuitem)
            db.session.commit()

    # A menu item can have one allergen.
    def test_relationship_allergen(self, db, allergen, menuitem):
        menuitem.allergens.append(allergen)
        db.session.add_all([allergen, menuitem])
        db.session.commit()

        assert allergen in menuitem.allergens

    # A menu item can be associated with a menu group.
    def test_relationship_menugroup(self, db, menuitem, menugroup):
        db.session.add_all([menuitem, menugroup])
        db.session.commit()

        assert menuitem.menugroup is menugroup

    # A menu item should have a field to store a path to its image.
    def test_menuitem_with_image_url(self, app, db, menuitem):
        menuitem.image_path = 'static/tacos_placeholder.jpg'
        db.session.add(menuitem)
        db.session.commit()
