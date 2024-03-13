import { Button, Navbar, Checkbox, Label, TextInput } from 'flowbite-react'
import SignUpForm from "../../components/registration/SignUpForm"

const Registration = () => {
    return (
        <div>
            <div class="w-full h-screen bg-fixed bg-center bg-cover flex justify-center items-center relative" style={{ backgroundImage: "url('/images/CustomerLoginBackground.png')" }}>
                <div className="h-[500px] w-[500px] bg-amber rounded-[25px] py-5 m-auto">
                    <SignUpForm />
                </div>
            </div>

        </div>

    );
}


export default Registration;