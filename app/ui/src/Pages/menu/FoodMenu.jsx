import Navbar from "../../components/menu/NavBar";
import MenuFooter from "../../components/menu/MenuFooter";
import FilterMenu from "../../components/menu/foodfilterMenu";

//this is the menu page which combine all the components

const Menu = () => {
  return (
    <div>
      <Navbar />
      <img
        src="/menu/FoodMenubackground.png"
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
