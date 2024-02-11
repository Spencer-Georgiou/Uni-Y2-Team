//Registration Page
//import { Navbar } from 'flowbite-react'
import Navbar1 from "../../Components/Registration/NavBar1"
import SignUpForm from "../../Components/Registration/SignUpForm"

const Registration= () => {
    return (
        <div>
            <div class="w-full h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/CustomerLoginBackground.png')" }}>
                <Navbar1/>
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