import Navbar from "../../components/Menu/NavBar";
import MenuFooter from "../../components/Menu/MenuFooter";
import FilterMenu from "../../components/Menu/filterMenu";

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
