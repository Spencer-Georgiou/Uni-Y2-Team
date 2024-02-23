import FormStaff from "../../components/login/FormStaff"
import NavBarStaff from "../../components/login/NavBarStaff"


const StaffLogin = () => {
    return (
        <div>
            <div
                className="w-full h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center relative"
                style={{ backgroundImage: "url('/images/StaffLoginBackground.png')" }}
            >
                <div className="h-[500px] w-[600px] bg-cherry rounded-[25px] py-5 m-auto">
                    <div className="flex justify-center ">
                        <img className="w-40 h-40 mb-6" src="/images/OaxacaLogo.png" alt="picture" />
                    </div>
                    <div className="text-2xl text-lemon font-sans font-semibold text-center mb-4">Staff Login</div>
                    <FormStaff />
                </div>
            </div>
        </div>
    )
}

export default StaffLogin
