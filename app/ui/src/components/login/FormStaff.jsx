
const FormStaff = () => {
    return (
        <form className="px-6 mx-auto">
            <div className="mb-5">
                <b><input type="text" id="username" className=" text-xl text-black font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5" placeholder="Username" required /></b>
            </div>
            <div className="mb-5 ">
                <b><input type="text" id="username" className="text-xl text-black font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5" placeholder="Password" required /></b>
            </div>
            <div className="flex justify-center">
                <button type="submit" className=" h-16 text-black font-sans font-semibold bg-lemon rounded-lg text-xl w-40 rounded-2xl px-5 py-2.5 text-center">Login</button>
            </div>

        </form>

    )

}

export default FormStaff