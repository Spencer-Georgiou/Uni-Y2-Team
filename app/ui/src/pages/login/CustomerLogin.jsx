import FormCustomer from "../../components/login/FormCustomer"

/**Log In page for customers which requires a username and password.
 *
 */
const CustomerLogin = () => {

    return (
        <div>
            //Background Image
            <div
                className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center relative"
                style={{ backgroundImage: "url('/images/CustomerLoginBackground.png')" }}
            >
                //User input form
                <div className="h-[500px] w-[600px] bg-amber rounded-[25px] py-5 m-auto">
                    <div className="flex justify-center ">
                        <img className="w-40 h-40 mb-6" src="/images/OaxacaLogo.png" alt="picture" />
                    </div>
                    <div className="text-2xl text-lemon font-sans font-semibold text-center mb-4">Customer Login</div>
                    <FormCustomer />
                </div>
            </div>
        </div>

    )
}

export default CustomerLogin
