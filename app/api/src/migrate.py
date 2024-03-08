"""
Module creating database entries.
"""
from src.models import Table
from src.models.allergen import Allergen
from src.models.base import db
from src.models.kitchen import Kitchen
from src.models.menugroup import MenuGroup
from src.models.menuitem import MenuItem
from src.models.session import Session
from src.models.waiter import Waiter


def migrate():
    """
    Create database entries.
    """
    # initialize menu groups
    starter = MenuGroup(type=MenuGroup.Type.FOOD, category=MenuGroup.Category.STARTER)
    main = MenuGroup(type=MenuGroup.Type.FOOD, category=MenuGroup.Category.MAIN)
    dessert = MenuGroup(type=MenuGroup.Type.FOOD, category=MenuGroup.Category.DESSERT)
    non_alcoholic = MenuGroup(type=MenuGroup.Type.DRINK, category=MenuGroup.Category.NONALCOHOLIC)
    alcoholic = MenuGroup(type=MenuGroup.Type.DRINK, category=MenuGroup.Category.ALCOHOLIC)
    db.session.add_all([starter, main, dessert, non_alcoholic, alcoholic])

    # initialize menu allergens
    gluten = Allergen(name="Gluten")
    dairy = Allergen(name="Dairy")
    nut = Allergen(name="Nut")
    egg = Allergen(name="Egg")
    mollusk = Allergen(name="Mollusk")
    db.session.add_all([gluten, dairy, nut, egg, mollusk])

    # initialize menu items with provided allergens and menu groups
    menuitems = [
        MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                 calorie=600, price=5.00, menugroup=starter, allergens=[gluten, dairy]),
        MenuItem(name="Patatas Bravas",
                 description="Roasted potatoes in tomato dressing", calorie=500,
                 price=3.00, menugroup=starter, allergens=[nut, egg]),
        MenuItem(name="Crispy Cauliflower Bites",
                 description="Roasted cauliflower in jalapeno dressing", calorie=200, price=2.50,
                 menugroup=starter, allergens=[]),
        MenuItem(name="Burrito",
                 description="Rice, beans and cheese wrapped up in a flour tortilla", calorie=350,
                 price=6.00, menugroup=main, allergens=[mollusk]),
        MenuItem(name="Chorizo Quesadilla",
                 description="Chorizo and cheese toasted in a flour tortilla", calorie=400,
                 price=7.50, menugroup=main, allergens=[]),
        MenuItem(name="Bean Tostadas", description="Chickpeas, beans and peas with tomato salsa",
                 calorie=300, price=6.00, menugroup=main, allergens=[gluten]),
        MenuItem(name="Halloumi Skewers", description="Roasted halloumi cheese and vegetables",
                 calorie=500, price=5.50, menugroup=main, allergens=[nut]),
        MenuItem(name="Churros", description="Fried churros with a chocolate filling", calorie=500,
                 price=4.00, menugroup=dessert, allergens=[]),
        MenuItem(name="Sweet Fried Plantains", description="Sugar coated fried plantains",
                 calorie=300, price=3.00, menugroup=dessert, allergens=[egg, mollusk]),
        MenuItem(name="Ice Cream", description="2 scoops of vanilla ice cream,", calorie=300,
                 price=2.50,
                 menugroup=dessert, allergens=[]),
        MenuItem(name="Peach Iced Tea", description="Homemade with fresh peaches", calorie=150,
                 price=3.00, menugroup=non_alcoholic, allergens=[]),
        MenuItem(name="Fanta Naranja", description="Orange Fanta", calorie=6, price=2.00,
                 menugroup=non_alcoholic, allergens=[dairy]),
        MenuItem(name="Hot chocolate", description="Thick hot chocolate served with a galleta",
                 calorie=250, price=2.50, menugroup=non_alcoholic, allergens=[]),
        MenuItem(name="Tequila Blanco", description="Blue agave", calorie=450, price=4.00,
                 menugroup=alcoholic, allergens=[]),
        MenuItem(name="Corona", description="Beer", calorie=300, price=3.00,
                 menugroup=alcoholic, allergens=[gluten, egg, mollusk]),
    ]

    db.session.add_all(menuitems)

    # initialize users with their sessions
    waiter = Waiter(username="Kate", password="123456")
    kitchen = Kitchen(username="Jenny", password="123456")
    db.session.add_all([waiter, kitchen])

    db.session.add_all([
        Session(user=waiter, token="abcde"),
        Session(user=kitchen, token="abcde"),
    ])

    # initialize tables
    for number in range(1, 20 + 1):
        db.session.add(Table(number=number))
    db.session.commit()
