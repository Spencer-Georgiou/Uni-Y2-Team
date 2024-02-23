import Navbar from "../../components/menu/NavBar";
import MenuFooter from "../../components/menu/MenuFooter";
import DrinkFilterMenu from "../../components/menu/DrinkFilterMenu";

//this is the menu page which combine all the components

const DrinkMenu = () => {
    return (
        <div>

            <img
                src="/menu/drinkMenuBanner.png"
                alt="picture"
                class="background-size:cover w-full"
            />
            <div class="bg-lemon">
                <DrinkFilterMenu />
                <MenuFooter />
            </div>
        </div>
    );
};

export default DrinkMenu;