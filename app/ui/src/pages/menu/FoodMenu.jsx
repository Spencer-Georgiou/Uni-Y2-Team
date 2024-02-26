import Navbar from "../../components/menu/NavBar";
import MenuFooter from "../../components/menu/MenuFooter";
import FilterMenu from "../../components/menu/FoodFilterMenu";

//this is the menu page which combine all the components

const Menu = () => {
  return (
    <div>
      <img
        src="/images/menu/FoodMenubackground.png"
        alt="picture"
        class="background-size:cover w-full"
      />
      <div class="bg-lemon">
        <FilterMenu />
        <MenuFooter />
      </div>
    </div>
  );
};

export default Menu;
