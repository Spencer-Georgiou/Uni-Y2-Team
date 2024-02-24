import NavBarHomepage from "../../components/Homepage/NavBarHomepage";

const AboutUs = () => {
    return(
        <div>
            <NavBarHomepage />
            <div
                className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center relative"
                style={{ backgroundImage: "url('/Homepage/Banners.jpg')" }}>

                <div className="h-[1000px] w-[1200px] bg-lemon rounded-[25px] py-5 m-auto">
                    <div className="flex justify-center ">
                        <img src="/aboutUs/Team27.png"/>
                    </div>

                    <p class="mr-10 ml-10 font-sans font-medium font-semibold"> Welcome to Oaxaca, where passion for Mexican cuisine meets a commitment to sharing the vibrant flavors of Mexico with our community. Our journey began with a love affair with Mexican food that transcended borders and ignited a desire to bring the essence of Mexico to your table.

Founded by Team 27, our story is one of passion, flavor, and tradition.  <br/><br/>


At Oaxaca, we believe that food has the power to transcend boundaries, connect people, and create lasting memories. That's why we're committed to sourcing the freshest ingredients, handcrafting every dish with care, and infusing each bite with the warmth and hospitality that epitomize Mexican culture. <br/><br/>


Whether you're craving the fiery heat of jalepeno poppers, the savory satisfaction of a classic burrito, or the irresistible indulgence of freshly made churros, our menu offers a tantalizing array of options to satisfy every palate.  <br/><br/>


But more than just a place to eat, Oaxaca is a gathering place, a home away from home where friends and family come together to savor the simple joys of good food and good company. So come join us on a culinary adventure through Mexico, where every bite tells a story and every meal is a celebration of the vibrant flavors and rich traditions that make Mexican cuisine truly unforgettable.</p>

                </div>
            </div>
        </div>
        

    );

}
export default AboutUs