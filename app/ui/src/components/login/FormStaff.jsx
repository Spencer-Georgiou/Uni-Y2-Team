import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

{/*Form that allows users to input their username and password to log in.*/ }
const FormStaff = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    {/*Change Username to user input*/ }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    {/*Change Password to user input*/ }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault(); {/*prevents the default form from submitting and keeps the page from reloading*/ }

        const postingData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password

            })


        };

        fetch('api/login', postingData).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.json().then(error => {
                    throw new Error(error.message);
                });
            }
        }).then(data => {
            const session_key = data.session_key; {/*extracts the session key from the server response data*/ }
            Cookies.set('session_key', session_key, { expires: 1 }); {/*sets the session key as a cookie for future reference and sets the expiry to be after 1 day(24 hours)*/ }
            Cookies.set('username', username, { expires: 1 });
            console.log("set cookie");
            console.log(username);
            alert("login success!");
            if (data.role === "waiter") {
                navigate('/WaiterHub');
            } else {
                navigate('/KitchenHub');
            }


        }).catch(error => {
            console.error("error happening", error)
            alert(error.message);
        })

    };



    return (
        <form onSubmit={handleSubmit} className="px-6 mx-auto">
            {/*Input field that allows users to input their usernames*/}
            <div className="mb-5">
                <b>
                    {/*When user submits form, assign input to username variable*/}
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        name="username"
                        className=" text-xl text-black font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5"
                        placeholder="Username"
                        required
                    />
                </b>
            </div>
            {/*Input field that allows users to input their password*/}
            <div className="mb-5 ">
                <b>
                    {/*When user submits form, assign input to password variable*/}
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        name="password"
                        className="text-xl text-black font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5"
                        placeholder="Password"
                        required
                    />
                </b>
            </div>
            {/*Button to submit form*/}
            <div className="flex justify-center">
                <button type="submit" className=" h-16 text-black font-sans font-semibold bg-lemon rounded-lg text-xl w-40 rounded-2xl px-5 py-2.5 text-center">Login</button>
            </div>

        </form>

    );

};

export default FormStaff;