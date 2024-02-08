import Navbar1 from "../../components/Menu/NavBar1"
import Filter from "../../components/Menu/filter"
import Starters from "../../components/Menu/Starters"
import Mains from "../../components/Menu/Mains"
import Desserts from "../../components/Menu/Desserts"
import Footer1 from "../../components/Menu/Footer1"

const Menu= () =>{
    return (
      <div>
      <Navbar1/>
      <img src="/menu/FoodMenubackground.png" alt="picture" class="background-size:cover w-full"/>
      <Filter/>
      <Starters/>
      <Mains/>
      <div class="bg-lemon">
      <Desserts/>
      <Footer1/>
      </div>
      </div>

    )

}

export default Menu