"""
Module creating database entries for deployment.
"""
from .model import Kitchen
from .model import MenuItem
from .model import Allergen
from .model import MenuGroup
from .model import Session
from .model import Waiter
from .model import db


def migrate():
    # initialize menu groups
    starter = MenuGroup(type=MenuGroup.Type.FOOD, category=MenuGroup.Category.STARTER)
    main = MenuGroup(type=MenuGroup.Type.FOOD, category=MenuGroup.Category.MAIN)
    dessert = MenuGroup(type=MenuGroup.Type.FOOD, category=MenuGroup.Category.DESSERT)
    db.session.add_all([starter, main, dessert])

    # initialize menu allergens
    gluten = Allergen(name="Gluten")
    dairy = Allergen(name="Dairy")
    nut = Allergen(name="Nut")
    egg = Allergen(name="Egg")
    mollusk = Allergen(name="Mollusk")
    db.session.add_all([gluten, dairy, nut, egg, mollusk])

    # initialize menu items with provided allergens and menu groups
    db.session.add_all([
        MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                 calorie=600, price=5.00, menugroup=starter),
        MenuItem(name="Jalapeno Poppers", description="With cream cheese",
                 calorie=450, price=3.50, menugroup=starter),
        MenuItem(name="Patatas Bravas",
                 description="Roasted potatoes in tomato dressing", calorie=500,
                 price=3.00, menugroup=starter)
    ])

    # initialize users with their sessions
    waiter = Waiter(username="Kate", password="123456")
    kitchen = Kitchen(username="Jenny", password="123456")
    db.session.add_all([waiter, kitchen])

    db.session.add_all([
        Session(user=waiter, token="abcde"),
        Session(user=kitchen, token="abcde"),
    ])
    db.session.commit()
