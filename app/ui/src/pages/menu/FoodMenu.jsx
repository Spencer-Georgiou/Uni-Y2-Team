
import FilterMenu from "../../components/menu/FoodFilterMenu"

//this is the menu page which combine all the components

const Menu = () => {
  return (
    <div>
      <img
        src="/menu/FoodMenubackground.png"
        alt="picture"
        class="background-size:cover w-full"
      />
      <div class="bg-lemon">
        <FilterMenu />
      </div>
    </div>
  );
};

export default Menu;
