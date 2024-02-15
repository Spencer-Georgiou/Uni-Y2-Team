//Registration Page
import { Button, Navbar, Checkbox, Label, TextInput } from 'flowbite-react'
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

            <div className="flex space-x-3 md:order-2">
                <Button pill className="text-rose bg-sunflower">Register</Button>
                <Button pill className="text-rose bg-sunflower">Log In</Button>
                <Navbar.Toggle />
            </div>
            
            </Navbar>

            <div class="w-full h-screen bg-fixed bg-center bg-cover flex justify-center items-center relative" style={{ backgroundImage: "url('/images/CustomerLoginBackground.png')" }}>
                
                <div class="h-[500px] w-[400px] bg-amber rounded m-auto">
                <img className="w-40 h-40 m-auto" src="/images/OaxacaLogo.png" alt="Oaxaca Logo" />
                    <div class="flex justify-center">
                    <form className="flex max-w-md flex-col gap-4">
                        <div className="text-2xl font-sans font-semibold text-center">Customer Sign Up</div>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" type="password" required />
                        </div>
                        <Button type="submit" className="bg-sunflower text-rose">Submit</Button>
                        </form>
    
                    </div>
                </div>
            </div>
  
        </div>
       
    );
  }
  
  
  export default Registration;