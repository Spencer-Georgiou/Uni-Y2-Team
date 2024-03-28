"""
Module creating database entries.
"""
import pathlib

from src.models import Table
from src.models import Allergen
from src.models import db
from src.models import Kitchen
from src.models import MenuGroup
from src.models import MenuItem
from src.models import Session
from src.models import Waiter
from src.models import Order
from src.models import OrderMenuItemAssociation
from src.models.user import hash_pwd


class Migration:
    """
    Class to migrate the data to the database.
    """

    def __init__(self, menuitem_image_directory):
        self.menuitem_image_directory = menuitem_image_directory

    def path_builder(self, directory, filename):
        """
        Build a file path with the given directory and filename.

        :param directory: Target directory
        :param filename:  the name of the file
        :return: a file path containing the directory and filename
        """
        abstract_path = pathlib.PurePath(directory, filename)
        concrete_path = pathlib.Path(abstract_path)
        return str(concrete_path.as_posix())

    def migrate(self):
        """
        Create database entries.
        """
        # initialize menu groups
        menugroups = {
            "starter": MenuGroup(type=MenuGroup.Type.FOOD, category=MenuGroup.Category.STARTER),
            "main": MenuGroup(type=MenuGroup.Type.FOOD, category=MenuGroup.Category.MAIN),
            "dessert": MenuGroup(type=MenuGroup.Type.FOOD, category=MenuGroup.Category.DESSERT),
            "soft_drink": MenuGroup(type=MenuGroup.Type.DRINK,
                                    category=MenuGroup.Category.SOFT_DRINK),
            "beer": MenuGroup(type=MenuGroup.Type.DRINK, category=MenuGroup.Category.BEER),
            "cocktail": MenuGroup(type=MenuGroup.Type.DRINK, category=MenuGroup.Category.COCKTAIL),
            "hot_drink": MenuGroup(type=MenuGroup.Type.DRINK,
                                   category=MenuGroup.Category.HOT_DRINK),
        }

        db.session.add_all(menugroups.values())

        # initialize menu allergens
        allergens = {
            "gluten": Allergen(name="Gluten"),
            "dairy": Allergen(name="Dairy"),
            "nut": Allergen(name="Nut"),
            "egg": Allergen(name="Egg"),
            "mollusk": Allergen(name="Mollusk"),
            "alcoholic": Allergen(name="Alcoholic"),
            "non-alcoholic": Allergen(name="Non-Alcoholic"),
        }

        db.session.add_all(allergens.values())

        # initialize menu items with provided allergens and menu groups
        menuitems = [
            # Food
            MenuItem(name="Tacos", description="Crispy tacos filled with cheese",
                     calorie=600, price=5.00, menugroup=menugroups["starter"],
                     allergens=[allergens["gluten"], allergens["dairy"]],
                     image_path="tacos.jpg"),
            MenuItem(name="Patatas Bravas",
                     description="Roasted potatoes in tomato dressing", calorie=500,
                     price=3.00, menugroup=menugroups["starter"],
                     allergens=[allergens["nut"], allergens["egg"]],
                     image_path="patatas-bravas.jpg"),
            MenuItem(name="Crispy Cauliflower Bites",
                     description="Roasted cauliflower in jalapeno dressing", calorie=200,
                     price=2.50,
                     menugroup=menugroups["starter"], allergens=[],
                     image_path="crispy-cauliflower-bites.jpg"),
            MenuItem(name="Burrito",
                     description="Rice, beans and cheese wrapped up in a flour tortilla",
                     calorie=350,
                     price=6.00, menugroup=menugroups["main"], allergens=[allergens["mollusk"]],
                     image_path="burrito.jpg"),
            MenuItem(name="Chorizo Quesadilla",
                     description="Chorizo and cheese toasted in a flour tortilla", calorie=400,
                     price=7.50, menugroup=menugroups["main"], allergens=[],
                     image_path="chorizo-quesadilla.jpg"),
            MenuItem(name="Bean Tostadas",
                     description="Chickpeas, beans and peas with tomato salsa",
                     calorie=300, price=6.00, menugroup=menugroups["main"],
                     allergens=[allergens["gluten"]], image_path="bean-tostadas.jpg"),
            MenuItem(name="Halloumi Skewers", description="Roasted halloumi cheese and vegetables",
                     calorie=500, price=5.50, menugroup=menugroups["main"],
                     allergens=[allergens["nut"]], image_path="halloumi-skewers.jpg"),
            MenuItem(name="Churros", description="Fried churros with a chocolate filling",
                     calorie=500,
                     price=4.00, menugroup=menugroups["dessert"], allergens=[],
                     image_path="churros.jpg"),
            MenuItem(name="Sweet Fried Plantains", description="Sugar coated fried plantains",
                     calorie=300, price=3.00, menugroup=menugroups["dessert"],
                     allergens=[allergens["egg"], allergens["mollusk"]],
                     image_path="sweet-fried-plantains.jpg"),
            MenuItem(name="Ice Cream", description="2 scoops of vanilla ice cream,", calorie=300,
                     price=2.50,
                     menugroup=menugroups["dessert"], allergens=[], image_path="ice-cream.jpg"),

            # Soft Drinks
            MenuItem(name="Jarritos",
                     description="Fruit flavoured soda- available in lime, pineapple, and mandarin",
                     calorie=200, price=2, menugroup=menugroups["soft_drink"],
                     allergens=[allergens["non-alcoholic"]],
                     image_path="jarritos.jpg"),
            MenuItem(name="Peach Iced Tea", description="Homemade with fresh Peaches", calorie=150,
                     price=3,
                     menugroup=menugroups["soft_drink"], allergens=[allergens["non-alcoholic"]],
                     image_path="peach-iced-tea.jpg"),
            MenuItem(name="Horchata",
                     description="Creamy and sweet beverage made from rice, almonds, cinnamon, "
                                 "and sugar",
                     calorie=220, price=2.8, menugroup=menugroups["soft_drink"],
                     allergens=[allergens["non-alcoholic"]],
                     image_path="horchata.jpg"),
            MenuItem(name="Mineral Water",
                     description="Naturally carbonated water sourced from underground springs",
                     calorie=0, price=2, menugroup=menugroups["soft_drink"],
                     allergens=[allergens["non-alcoholic"]],
                     image_path="mineral-water.jpg"),

            # Beers
            MenuItem(name="Corona Extra", description="Light, refreshing with wedge of lime",
                     calorie=300, price=3,
                     menugroup=menugroups["beer"], allergens=[allergens["alcoholic"]],
                     image_path="corona-extra.jpg"),
            MenuItem(name="Modelo Especial",
                     description="Balanced flavour profile, and smooth, crisp finish", calorie=150,
                     price=2, menugroup=menugroups["beer"], allergens=[allergens["alcoholic"]],
                     image_path="modelo-especial.jpg"),
            MenuItem(name="Pacifico", description="Crisp taste with a touch of malt sweetness",
                     calorie=150, price=2.3,
                     menugroup=menugroups["beer"], allergens=[allergens["alcoholic"]],
                     image_path="pacifico.jpg"),
            MenuItem(name="Dos Equis", description="Smooth flavour with hints of toasted malt",
                     calorie=180, price=3,
                     menugroup=menugroups["beer"], allergens=[allergens["alcoholic"]],
                     image_path="dos-equis.jpg"),

            # Cocktails
            MenuItem(name="Margarita",
                     description="Classic cocktail featuring tequila, lime juice, and orange "
                                 "liqueur, "
                                 "served over ice and often rimmed with salt",
                     calorie=290, price=8, menugroup=menugroups["cocktail"],
                     allergens=[allergens["alcoholic"]],
                     image_path="margarita.jpg"),
            MenuItem(name="Paloma",
                     description="Refreshing Mexican cocktail made with tequila, grapefruit soda, "
                                 "lime juice, and a pinch of salt, served over ice",
                     calorie=250, price=9, menugroup=menugroups["cocktail"],
                     allergens=[allergens["alcoholic"]],
                     image_path="paloma.jpg"),
            MenuItem(name="Michelada",
                     description="Spicy and savory Mexican beer cocktail made with beer, "
                                 "lime juice, "
                                 "assorted sauces, spices, and chili peppers, served over ice "
                                 "with a "
                                 "salted rim",
                     calorie=140, price=11, menugroup=menugroups["cocktail"],
                     allergens=[allergens["alcoholic"]],
                     image_path="michelada.jpg"),
            MenuItem(name="Tequila Sunrise",
                     description="Made with tequila, orange juice, and grenadine, creating a "
                                 "gradient "
                                 "of colors resembling a sunrise",
                     calorie=300, price=8, menugroup=menugroups["cocktail"],
                     allergens=[allergens["alcoholic"]],
                     image_path="tequila-sunrise.jpg"),
            MenuItem(name="Mexican Mule",
                     description="Variation of the classic Moscow Mule cocktail, made with "
                                 "tequila, "
                                 "lime juice, and ginger beer, served over ice with a wedge of "
                                 "lime",
                     calorie=240, price=10, menugroup=menugroups["cocktail"],
                     allergens=[allergens["alcoholic"]],
                     image_path="mexican-mule.jpg"),

            # Hot Drinks
            MenuItem(name="Mexican Hot Chocolate",
                     description="Hot chocolate spiced with cinnamon and chili", calorie=300,
                     price=4.5, menugroup=menugroups["hot_drink"],
                     allergens=[allergens["non-alcoholic"]],
                     image_path="mexican-hot-chocolate.jpg"),
            MenuItem(name="Cafe de Olla",
                     description="Coffee brewed with cinnamon and piloncillo- unrefined cane sugar",
                     calorie=180, price=3, menugroup=menugroups["hot_drink"],
                     allergens=[allergens["non-alcoholic"]],
                     image_path="cafe-de-olla.jpg"),
            MenuItem(name="Atole",
                     description="Comforting beverage made from masa harina (corn flour), water or "
                                 "milk, sweeteners, and spices",
                     calorie=130, price=2.5, menugroup=menugroups["hot_drink"],
                     allergens=[allergens["non-alcoholic"]],
                     image_path="attole.jpg"),
            MenuItem(name="Agua de Jamaica", description="Tangy and sweet hibiscus flower tea",
                     calorie=90, price=1.2,
                     menugroup=menugroups["hot_drink"], allergens=[allergens["non-alcoholic"]],
                     image_path="agua-de-jamaica.jpg"),
        ]
        for menuitem in menuitems:
            if menuitem.image_path is not None:
                menuitem.image_path = self.path_builder(self.menuitem_image_directory,
                                                        menuitem.image_path)
        db.session.add_all(menuitems)

        # initialize users with their sessions
        waiters = [
            Waiter(username="Kate", password=hash_pwd("123456"), session=Session()),
            Waiter(username="Ava", password=hash_pwd("123456"), session=Session()),
            Waiter(username="Jack", password=hash_pwd("123456"), session=Session()),
            Waiter(username="Sam", password=hash_pwd("123456")),
            Waiter(username="Lucy", password=hash_pwd("123456")),
        ]
        kitchens = [
            Kitchen(username="Jenny", password=hash_pwd("123456"), session=Session()),
            Kitchen(username="Ben", password=hash_pwd("123456")),
            Kitchen(username="Zoe", password=hash_pwd("123456")),
        ]
        db.session.add_all(waiters + kitchens)

        # initialize tables
        for number in range(1, 20 + 1):
            db.session.add(Table(number=number))

        # initialize orders
        orders = [
            Order(table_number=1, status=Order.Status.CONFIRMING,
                  menuitem_associations=[
                      OrderMenuItemAssociation(menuitem_name="Tacos", quantity=2),
                  ]),
            Order(table_number=2, status=Order.Status.CONFIRMING,
                  menuitem_associations=[
                      OrderMenuItemAssociation(menuitem_name="Chorizo Quesadilla", quantity=4),
                      OrderMenuItemAssociation(menuitem_name="Mexican Mule", quantity=4),
                  ]),
            Order(table_number=3, status=Order.Status.PREPARING,
                  menuitem_associations=[
                      OrderMenuItemAssociation(menuitem_name="Burrito", quantity=2),
                      OrderMenuItemAssociation(menuitem_name="Peach Iced Tea", quantity=2),
                  ],
                  waiter_username="Kate"),
            Order(table_number=4, status=Order.Status.PREPARING,
                  menuitem_associations=[
                      OrderMenuItemAssociation(menuitem_name="Crispy Cauliflower Bites",
                                               quantity=5),
                      OrderMenuItemAssociation(menuitem_name="Margarita", quantity=4),
                      OrderMenuItemAssociation(menuitem_name="Horchata", quantity=1),
                  ],
                  waiter_username="Ava"),
            Order(table_number=5, status=Order.Status.DELIVERING,
                  menuitem_associations=[
                      OrderMenuItemAssociation(menuitem_name="Sweet Fried Plantains", quantity=3),
                      OrderMenuItemAssociation(menuitem_name="Ice Cream", quantity=5),
                  ],
                  waiter_username="Jack"),
            Order(table_number=6, status=Order.Status.DELIVERING,
                  menuitem_associations=[
                      OrderMenuItemAssociation(menuitem_name="Halloumi Skewers", quantity=3),
                      OrderMenuItemAssociation(menuitem_name="Tequila Sunrise", quantity=3),
                  ],
                  waiter_username="Kate"),
            Order(table_number=7, status=Order.Status.DELIVERED,
                  menuitem_associations=[
                      OrderMenuItemAssociation(menuitem_name="Bean Tostadas", quantity=2),
                      OrderMenuItemAssociation(menuitem_name="Paloma", quantity=2),
                  ],
                  waiter_username="Ava"),
            Order(table_number=8, status=Order.Status.DELIVERED,
                  menuitem_associations=[
                      OrderMenuItemAssociation(menuitem_name="Burrito", quantity=5),
                      OrderMenuItemAssociation(menuitem_name="Bean Tostadas", quantity=5),
                      OrderMenuItemAssociation(menuitem_name="Mineral Water", quantity=2),
                      OrderMenuItemAssociation(menuitem_name="Atole", quantity=4),
                      OrderMenuItemAssociation(menuitem_name="Corona Extra", quantity=2)
                  ],
                  waiter_username="Jack"),
        ]
        db.session.add_all(orders)
        db.session.commit()
