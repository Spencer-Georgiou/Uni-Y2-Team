//Registration Page
//import { Navbar } from 'flowbite-react'
import Navbar1 from "../../Components/Registration/NavBar1"
import SignUpForm from "../../Components/Registration/SignUpForm"

const Registration= () => {
    return (
        <div>
            <Navbar1/>
            <div
                className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center relative"
                style={{ backgroundImage: "url('/images/CustomerLoginBackground.png')" }}
            >
                <div className="h-[500px] w-[600px] bg-orange lg-rounded py-5 m-auto">
                    <div className="flex justify-center ">
                        <img className="w-40 h-40 mb-6" src="/images/OaxacaLogo.png" alt="picture" />
                    </div>
                    <div className="text-2xl text-cherry font-sans font-semibold text-center mb-4">Customer Login</div>
                    <SignUpForm/>
                </div>
            </div>
  
        </div>
       
    );
  }
  
  
  export default Registration;