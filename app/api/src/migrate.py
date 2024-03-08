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
    soft_drink = MenuGroup(type=MenuGroup.Type.DRINK, category=MenuGroup.Category.SOFT_DRINK)
    beer = MenuGroup(type=MenuGroup.Type.DRINK, category=MenuGroup.Category.BEER)
    cocktail = MenuGroup(type=MenuGroup.Type.DRINK, category=MenuGroup.Category.COCKTAIL)
    hot_drink = MenuGroup(type=MenuGroup.Type.DRINK, category=MenuGroup.Category.HOT_DRINK)

    db.session.add_all([starter, main, dessert, soft_drink, beer, cocktail, hot_drink])

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
        # Soft Drinks
        MenuItem(name="Jarritos", description="fruit flavoured soda- available in lime, pineapple, and mandarin",
                 calorie=200, price=2, menugroup=soft_drink, allergens=[]),
        MenuItem(name="Peach Iced Tea", description="Homemade with fresh Peaches", calorie=150, price=3,
                 menugroup=soft_drink, allergens=[]),
        MenuItem(name="Horchata", description="creamy and sweet beverage made from rice, almonds, cinnamon, and sugar",
                 calorie=220, price=2.8, menugroup=soft_drink, allergens=[]),
        MenuItem(name="Mineral Water", description="naturally carbonated water sourced from underground springs",
                 calorie=0, price=2, menugroup=soft_drink, allergens=[]),

        # Beers
        MenuItem(name="Corona Extra", description="light, refreshing with wedge of lime", calorie=300, price=3,
                 menugroup=beer, allergens=[]),
        MenuItem(name="Modelo Especial", description="balanced flavour profile, and smooth, crisp finish", calorie=150,
                 price=2, menugroup=beer, allergens=[]),
        MenuItem(name="Pacifico", description="crisp taste with a touch of malt sweetness", calorie=150, price=2.3,
                 menugroup=beer, allergens=[]),
        MenuItem(name="Dos Equis", description="smooth flavour with hints of toasted malt", calorie=180, price=3,
                 menugroup=beer, allergens=[]),

        # Cocktails
        MenuItem(name="Margarita",
                 description="classic cocktail featuring tequila, lime juice, and orange liqueur, served over ice and often rimmed with salt",
                 calorie=290, price=8, menugroup=cocktail, allergens=[]),
        MenuItem(name="Paloma",
                 description="refreshing Mexican cocktail made with tequila, grapefruit soda, lime juice, and a pinch of salt, served over ice",
                 calorie=250, price=9, menugroup=cocktail, allergens=[]),
        MenuItem(name="Michelada",
                 description="spicy and savory Mexican beer cocktail made with beer, lime juice, assorted sauces, spices, and chili peppers, served over ice with a salted rim",
                 calorie=140, price=11, menugroup=cocktail, allergens=[]),
        MenuItem(name="Tequila Sunrise",
                 description="made with tequila, orange juice, and grenadine, creating a gradient of colors resembling a sunrise",
                 calorie=300, price=8, menugroup=cocktail, allergens=[]),
        MenuItem(name="Mexican Mule",
                 description="variation of the classic Moscow Mule cocktail, made with tequila, lime juice, and ginger beer, served over ice with a wedge of lime",
                 calorie=240, price=10, menugroup=cocktail, allergens=[]),

        # Hot Drinks
        MenuItem(name="Mexican Hot Chocolate", description="hot chocolate spiced with cinnamon and chili", calorie=300,
                 price=4.5, menugroup=hot_drink, allergens=[]),
        MenuItem(name="Cafe de Olla", description="coffee brewed with cinnamon and piloncillo- unrefined cane sugar",
                 calorie=180, price=3, menugroup=hot_drink, allergens=[]),
        MenuItem(name="Atole",
                 description="comforting beverage made from masa harina (corn flour), water or milk, sweeteners, and spices",
                 calorie=130, price=2.5, menugroup=hot_drink, allergens=[]),
        MenuItem(name="Agua de Jamaica", description="tangy and sweet hibiscus flower tea", calorie=90, price=1.2,
                 menugroup=hot_drink, allergens=[])
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
