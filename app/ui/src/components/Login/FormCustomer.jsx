import React, { useState } from 'react';


const FormCustomer = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the default form from submitting and keeps the page from reloading

        if (username != null && password != null) {
            alert('login success!'); //a mock login authentication alert box pops up when the fields are not null
        }
    };

    return (
        <form onSubmit={handleSubmit} className="px-6 mx-auto">
            <div className="mb-5">
                <b><input type="text" id="username" value={username} onChange={handleUsernameChange} name="username" className=" text-xl text-black font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5" placeholder="Username" required /></b>
            </div>
            <div className="mb-5 ">
                <b><input type="text" id="password" value={password} onChange={handlePasswordChange} name="password" className="text-xl text-black font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5" placeholder="Password" required /></b>
            </div>
            <div className="flex justify-center">
                <button type="submit" className=" h-16 font-sans font-semibold bg-lemon rounded-lg text-xl w-40 rounded-2xl px-5 py-2.5 text-center">Login</button>
            </div>

        </form>


    );

}

export default FormCustomer