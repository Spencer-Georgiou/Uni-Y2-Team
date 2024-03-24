import { Button, Navbar, Checkbox, Label, TextInput } from 'flowbite-react'
import SignUpForm from "../../components/registration/SignUpForm"

{/*Regustration page that allows customers to register an account*/}
const Registration = () => {
    return (
        <div>
            {/*Background Image*/}
            <div 
            className="w-full h-screen bg-fixed bg-center bg-cover flex justify-center items-center relative" 
            style={{ backgroundImage: "url('/images/RegistrationBackground.jpg')" }}>
                
                {/*User input form*/}
                <div className="h-[500px] w-[600px] bg-amber rounded-[25px] py-5 m-auto">
                    <div className="flex justify-center ">
                        <img className="w-40 h-40 mb-6" src="/images/OaxacaLogo.png" alt="picture" />
                    </div>
                    <div className="text-2xl text-lemon font-sans font-semibold text-center mb-4">Customer Sign Up</div>
                    <SignUpForm />
                </div>
            </div>
        </div>

    )
}


export default Registration;