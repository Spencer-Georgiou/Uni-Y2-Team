from src.model import MenuGroup
from src.schema import MenuGroupSchema


class TestMenuGroupSchema:
    # A menu group with no menuitem returned by a query is serializable.
    def test_serialize_menugroup_no_menuitem(self, db):
        expected = {'category': 'Starter', 'id': 1, 'menuitems': [], 'type': 'Food'}

        menugroup = MenuGroup(type="Food", category="Starter")
        db.session.add(menugroup)
        db.session.commit()
        quried_menugroup = db.session.query(MenuGroup).first()
        serialised_menugroup = MenuGroupSchema().dump(quried_menugroup)
        assert serialised_menugroup == expected
