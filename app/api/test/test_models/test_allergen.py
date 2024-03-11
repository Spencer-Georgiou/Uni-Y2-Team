class TestAllergen:
    # An instance of an allergen object can be created and stored in the database.
    def test_create_allergen(self, db, allergen):
        db.session.add(allergen)
        db.session.commit()

    # An allergen can be associated with at least one menu item.
    def test_relationship_menuitem(self, db, menuitem, allergen):
        allergen.menuitems.append(menuitem)
        db.session.add(allergen)
        db.session.add(menuitem)
        db.session.commit()

        assert menuitem in allergen.menuitems
