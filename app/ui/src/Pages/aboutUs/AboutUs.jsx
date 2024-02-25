
const AboutUs = () => {
    return(
        <div>
            <div
                className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center relative"
                style={{ backgroundImage: "url('/aboutUs/Building.jpg')" }}>

                <div className="flex flex-row space-x-4">

                    

                    <div className="bg-lemon h-[1000px] w-[200px] bg-lemon rounded-[25px] m-auto bg-opacity-85">
                        <div className="pl-1 space-y-10 w-25 pt-10">
                            <div className="relative block group">
                                <img className="group-hover:blur duration-300 opacity-80" src="/aboutUs/Guacamole.png" />

                                <div className="opacity-0 hover:opacity-100 duration-300 absolute 
                                inset-0 z-10 flex text-center justify-center items-center tracking-widest leading-normal text-3xl 
                                text-white font-sans font-semibold">Abigail<br/>Restaurant Manager</div>
                           
                            </div>


                            <div className="relative block group">
                                <img className="group-hover:blur duration-300 opacity-80" src="/aboutUs/HotSauce.png" />

                                <div className="opacity-0 hover:opacity-100 duration-300 absolute 
                                inset-0 z-10 flex text-center justify-center items-center tracking-wider leading-normal text-3xl 
                                text-white font-sans font-bold">Natasha<br/>Executive Chef</div>
                           
                            </div>

                            <div className="relative block group">
                                <img className="group-hover:blur duration-300 opacity-80" src="/aboutUs/Taco.png" />

                                <div className="opacity-0 hover:opacity-100 duration-300 absolute 
                                inset-0 z-10 flex text-center justify-center items-center leading-normal text-3xl 
                                text-white font-sans font-bold">Nicky<br/> Social Media Specialist</div>
                           
                            </div>

                            <div className="relative block group">
                                <img className="group-hover:blur duration-300 opacity-80" src="/aboutUs/Popsicle.png" />

                                <div className="opacity-0 hover:opacity-100 duration-300 absolute 
                                inset-0 z-10 flex text-center justify-center items-center tracking-wider leading-normal text-3xl 
                                text-white font-sans font-bold">Zubiya <br/> Food Scientist</div>
                           
                            </div>
                        </div>
                    </div>


                    <div className="h-[1000px] w-[1200px] bg-lemon rounded-[25px] py-5 m-auto opacity-95">
                        <div className="flex justify-center ">
                            <img src="/aboutUs/Team27.png"/>

                        </div>

                        <p class="mr-10 ml-10 font-sans text-xl font-semibold text-center tracking-widest leading-loose"> <br/> Welcome to Oaxaca, 
                        where passion for Mexican cuisine meets a commitment to 
                        sharing the vibrant flavours of Mexico with our community. 
                        Our journey began with a love affair with Mexican food that 
                        transcended borders and ignited a desire to bring the essence of Mexico to your table.
                        Founded by Team 27- our story is one of passion, flavour, and tradition.  <br/><br/>
                        
                        At Oaxaca, we believe that food has the power to transcend boundaries, 
                        connect people, and create lasting memories. 
                        That's why we're committed to sourcing the freshest ingredients, 
                        handcrafting every dish with care, and infusing each bite with the 
                        warmth and hospitality that epitomize Mexican culture. <br/><br/>
                        
                        Whether you're craving the fiery heat of jalapeno poppers, 
                        the savoury satisfaction of a classic burrito, 
                        or the irresistible indulgence of freshly made churros, 
                        our menu offers a tantalizing array of options to satisfy every palate.  <br/><br/>
                        
                        But more than just a place to eat, Oaxaca is a gathering place,
                        a home away from home where friends and family come together to savour 
                        the simple joys of good food and good company. 
                        So, come join us on a culinary adventure through Mexico, 
                        where every bite tells a story and every meal is a celebration of the vibrant 
                        flavours and rich traditions that make Mexican cuisine truly unforgettable.</p>

       
                    </div>


                    <div className="bg-lemon h-[1000px] w-[200px] bg-lemon rounded-[25px] bg-opacity-85">
                        <div>
                            <div className="relative block group">
                                <img className="group-hover:blur duration-300 opacity-80" src="/aboutUs/Taco.png" />

                                <div className="opacity-0 hover:opacity-100 duration-300 absolute 
                                inset-0 z-10 flex text-center justify-center items-center leading-normal text-3xl 
                                text-white font-sans font-bold">Belal<br/> Finance Manager</div>
                           
                            </div>

                            <div className="relative block group">
                                <img className="group-hover:blur duration-300 opacity-80" src="/aboutUs/Popsicle.png" />

                                <div className="opacity-0 hover:opacity-100 duration-300 absolute 
                                inset-0 z-10 flex text-center justify-center items-center leading-normal text-3xl 
                                text-white font-sans font-bold">Humza<br/> Inventory Manager</div>
                           
                            </div>

                            <div className="relative block group">
                                <img className="group-hover:blur duration-300 opacity-80" src="/aboutUs/Enchilada.png" />

                                <div className="opacity-0 hover:opacity-100 duration-300 absolute 
                                inset-0 z-10 flex text-center justify-center items-center leading-normal text-3xl 
                                text-white font-sans font-bold">Liu<br/>Data Analyst</div>
                           
                            </div>

                            <div className="relative block group">
                                <img className="group-hover:blur duration-300 opacity-80" src="/aboutUs/HotSauce.png" />

                                <div className="opacity-0 hover:opacity-100 duration-300 absolute 
                                inset-0 z-10 flex text-center justify-center items-center leading-normal text-3xl 
                                text-white font-sans font-bold">Luke<br/> Legal Consultant</div>
                           
                            </div>

                            <div className="relative block group">
                                <img className="group-hover:blur duration-300 opacity-80" src="/aboutUs/Guacamole.png" />

                                <div className="opacity-0 hover:opacity-100 duration-300 absolute 
                                inset-0 z-10 flex text-center justify-center items-center leading-normal text-3xl 
                                text-white font-sans font-bold">Spencer<br/> CEO</div>
                           
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    );

}
export default AboutUs