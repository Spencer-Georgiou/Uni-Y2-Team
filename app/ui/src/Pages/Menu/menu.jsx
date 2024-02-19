import Navbar1 from "../../components/Menu/NavBar1";
import Footer1 from "../../components/Menu/Footer1";
import FilterMenu from "../../components/Menu/filterMenu";

//this is the menu page which combine all the components

const Menu = () => {
  return (
    <div>
      <Navbar1 />
      <img
        src="/menu/FoodMenubackground.png"
        alt="picture"
        class="background-size:cover w-full"
      />
      <div class="bg-lemon">
        <FilterMenu />
        <Footer1 />
      </div>
    </div>
  );
};

export default Menu;
