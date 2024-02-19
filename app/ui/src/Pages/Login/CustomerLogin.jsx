import FormCustomer from "../../Components/Login/FormCustomer"
import NavBarCustomer from "../../Components/Login/NavBarCustomer"

const CustomerLogin = () => {

    return (
        <div>
            <NavBarCustomer />
            <div
                className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center relative"
                style={{ backgroundImage: "url('/images/CustomerLoginBackground.png')" }}
            >
                <div className="h-[500px] w-[600px] bg-orangy rounded-[25px] py-5 m-auto">
                    <div className="flex justify-center ">
                        <img className="w-40 h-40 mb-6" src="/images/OaxacaLogo.png" alt="picture" />
                    </div>
                    <div className="text-2xl text-cherry font-sans font-semibold text-center mb-4">Customer Login</div>
                    <FormCustomer />
                </div>
            </div>
        </div>

    )
}

export default CustomerLogin
