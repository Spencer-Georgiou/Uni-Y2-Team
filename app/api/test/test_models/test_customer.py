class TestCustomer:
    # An instance of customer can be created and stored in the database.
    def test_create_customer(self, db, customer):
        db.session.add(customer)
        db.session.commit()

    # A customer can refer to its associated session.
    def test_relationship_session(self, db, customer, session_for_customer):
        db.session.add_all([customer, session_for_customer])
        db.session.commit()

        assert customer.session is session_for_customer
