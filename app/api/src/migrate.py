"""
Module creating database entries for deployment.
"""
from .model import MenuItem
from .model import Allergen
from .model import MenuGroup
from .model import db
from .api import create_app
from .enum import MenuType
from .enum import MenuCategory

app = create_app()

with app.app_context():
    # initialize menu groups
    starter = MenuGroup(type=MenuType.FOOD, category=MenuCategory.STARTER)
    main = MenuGroup(type=MenuType.FOOD, category=MenuCategory.MAIN)
    dessert = MenuGroup(type=MenuType.FOOD, category=MenuCategory.DESSERT)
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

    db.session.commit()
