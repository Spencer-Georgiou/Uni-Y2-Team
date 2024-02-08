import Form_customer from "../../components/Form_customer"
import Navbar_customer from "../../components/Navbar_customer"



const CustomerLogin = () => {
    return (
        <div>
            <Navbar_customer />
            <div
                className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center relative"
                style={{ backgroundImage: "url('/images/CustomerLoginBackground.png')" }}
            >
                <div className="h-[600px] w-[600px] bg-orangy rounded-[25px] flex flex-col justify-between py-8 m-auto">
                    <div className="flex justify-center ">
                        <img className="w-40 h-40 mb-10" src="/images/OaxacaLogo.png" alt="picture" />
                    </div>
                    <div className="text-2xl text-cherry font-sans font-semibold text-center">Customer Login</div>
                    <div className="mb-20">
                        <Form_customer />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CustomerLogin
