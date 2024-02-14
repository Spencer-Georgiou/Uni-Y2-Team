//Registration Page
import { Button, Navbar } from 'flowbite-react'
//import NavBar from "../../Components/Registration/NavBar"
import SignUpForm from "../../Components/Registration/SignUpForm"

const Registration= () => {
    return (
        <div>
            <Navbar fluid>

            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                Home
                </Navbar.Link>
                <Navbar.Link href="#">Menus</Navbar.Link>
                <Navbar.Link href="#">Order</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>

            <Navbar.Brand href="https://flowbite-react.com">
                <img src="images/OaxacaLogo.png" className="mr-3 h-6 sm:h-9 md:order-1" alt="Oaxaca Logo" />
            </Navbar.Brand>

            <div className="flex md:order-2">
                <Button>Register</Button>
                <Button>Log In</Button>
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