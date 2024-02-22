from enum import Enum


class OrderStatus(Enum):
    """
    An enum that stands for possible statuses of an order.

    :cvar ORDERING: a customer is making an order
    :cvar PREPARING: the kitchen is preparing for the order
    :cvar DELIVERING: the order is ready for a waiter to deliver
    :cvar DELIVERED: the order has been delivered
    :cvar FINISHED: the order is finished, i.e. the customer left the table
    """
    ORDERING = "Ordering"
    PREPARING = "Preparing"
    DELIVERING = "Delivering"
    DELIVERED = "Delivered"
    FINISHED = "Finished"


class MenuType(Enum):
    """
    An enum that is for the type of menus.

    :cvar FOOD: the Food Menu
    :cvar DRINK: the Drink Menu
    """
    FOOD = "Food"
    DRINK = "Drink"


class MenuCategory(Enum):
    """
    An enum that is for the category of menus.

    :cvar STARTER: the starter meals
    :cvar MAIN: the main meals
    :cvar DESSERT: the dessert meals
    :cvar ALCOHOLIC: the alcoholic drink
    :cvar NONALCOHOLIC: the non-alcoholic drink
    """
    STARTER = "Starter"
    MAIN = "Main"
    DESSERT = "Dessert"
    ALCOHOLIC = "Alcoholic"
    NONALCOHOLIC = "Non-Alcoholic"
