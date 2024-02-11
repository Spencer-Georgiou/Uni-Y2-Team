//Registration Page
//import { Navbar } from 'flowbite-react'
import NavBar from "../../Components/Registration/NavBar"
import SignUpForm from "../../Components/Registration/SignUpForm"

const Registration= () => {
    return (
        <div>
            <div class="w-full h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/CustomerLoginBackground.png')" }}>
                <NavBar/>
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