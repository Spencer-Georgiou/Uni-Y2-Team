//Registration Page
import { Button, Navbar } from 'flowbite-react'
//import NavBar from "../../Components/Registration/NavBar"
import SignUpForm from "../../Components/Registration/SignUpForm"

const Registration= () => {
    return (
        <div>
            <Navbar fluid className="bg-rose">

            <Navbar.Collapse>
                <Navbar.Link href="#" className="text-sunflower md:hover:text-amber">
                Home
                </Navbar.Link>
                <Navbar.Link href="#" className="text-sunflower md:hover:text-amber">Menus</Navbar.Link>
                <Navbar.Link href="#" className="text-sunflower md:hover:text-amber">Order</Navbar.Link>
                <Navbar.Link href="#" className="text-sunflower md:hover:text-amber">Contact</Navbar.Link>
            </Navbar.Collapse>

            <Navbar.Brand href="https://flowbite-react.com">
                <img src="images/OaxacaLogo.png" className="mr-3 h-6 sm:h-9 md:order-1" alt="Oaxaca Logo" />
            </Navbar.Brand>

            <div className="flex md:order-2">
                <Button className="text-rose bg-sunflower">Register</Button>
                <Button className="text-rose bg-sunflower">Log In</Button>
                <Navbar.Toggle />
            </div>
            
            </Navbar>

            <div class="w-full h-screen bg-fixed bg-center bg-cover flex justify-center items-center relative" style={{ backgroundImage: "url('/images/CustomerLoginBackground.png')" }}>
                
                <div class="h-[500px] w-[400px] bg-amber rounded m-auto">
                    <div class="flex justify-center">
                        <SignUpForm/>
                    </div>
                </div>
            </div>
  
        </div>
       
    );
  }
  
  
  export default Registration;