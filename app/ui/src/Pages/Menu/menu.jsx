import Navbar1 from "../../components/Menu/NavBar1"
import Filter from "../../components/Menu/filter"
import Starters from "../../components/Menu/Starters"
import Mains from "../../components/Menu/Mains"

const Menu= () =>{
    return (
      <div>
      <Navbar1/>
      <img src="/menu/FoodMenubackground.png" alt="picture" class="background-size:cover w-full"/>
      <Filter/>
      <Starters/>
      <Mains/>
      </div>

    )

}

export default Menu