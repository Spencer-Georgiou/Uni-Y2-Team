import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

{/*Form that allows new customers to register an account*/}
const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  {/*Change Email to user input*/}
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  {/*Change Password to user input*/}
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); {/*prevents the default form from submitting and keeps the page from reloading*/}

    const postingData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    fetch("/api/customer", postingData)
      .then((response) => {
        if (response.status === 200) return response.json();
        else alert("Successfully signed up");
      })
      .then(navigate('/'))
      .catch((error) => {
        console.error("Error - please try again later", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 mx-auto">
    {/*Input field that allows users to input their emails*/}
    <div className="mb-5">
      <b>
        {/*When user submits form, assign input to email variable*/}
        <input
          type="text"
          id="text"
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
        {/*When user submits form, assign input to email variable*/}
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
      <button
        type="submit"
        className="h-16 font-sans font-semibold bg-lemon rounded-lg text-xl w-40 rounded-2xl px-5 py-2.5 text-center hover:ring-4 hover:ring-cherry"
      >
        Sign Up
      </button>
    </div>
  </form>
  );
}

export default SignUpForm

