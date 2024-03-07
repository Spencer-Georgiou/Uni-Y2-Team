class TestMenuGroup:
    # An instance of menu group can be created and stored in the database.
    def test_create_menugroup(self, db, menugroup):
        db.session.add(menugroup)
        db.session.commit()

    # A menu group can contain one menu item.
    def test_relationship_menuitem(self, db, menugroup, menuitem):
        db.session.add_all([menuitem, menugroup])
        db.session.commit()

        assert menuitem in menugroup.menuitems
