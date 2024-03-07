class TestKitchen:
    # An instance of kitchen staff can be created and stored in the database.
    def test_create_kitchen(self, db, kitchen):
        db.session.add(kitchen)
        db.session.commit()

    # A kitchen can refer to its associated session.
    def test_relationship_session(self, db, kitchen, session_for_kitchen):
        db.session.add_all([kitchen, session_for_kitchen])
        db.session.commit()

        assert kitchen.session is session_for_kitchen
