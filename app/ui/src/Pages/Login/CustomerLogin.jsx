import Form_customer from "../../components/Form_customer"
import Navbar_customer from "../../components/Navbar_customer"



const CustomerLogin = () => {
    return (
        <div>
            <Navbar_customer />
            <div
                className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: "url('/images/CustomerLoginBackground.png')" }}
            >
                <div>
                    <Form_customer />
                </div>
            </div>
        </div>

    )
}

export default CustomerLogin
