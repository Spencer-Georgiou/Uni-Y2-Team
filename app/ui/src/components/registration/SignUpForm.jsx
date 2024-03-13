import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, {useState} from "react";

{/*Form that allows new customers to register an account*/}
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  {/*Change Email to user input*/}
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
        email: email,
        password: password,
      }),
    };
    fetch("/api/register", postingData)
      .then((response) => {
        if (response.status === 200) return response.json();
        else alert("error here");
      })
      .then()
      .catch((error) => {
        console.error("there was an error", error);
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
          id="email"
          value={email}
          onChange={handleEmailChange}
          name="email"
          className=" text-xl text-black font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5"
          placeholder="Email"
          required
        />
      </b>
    </div>
    {/*Input field that allows users to input their password*/}
    <div className="mb-5 ">
      <b>
        {/*When user submits form, assign input to username variable*/}
        <input
          type="text"
          id="password"
          value={password}
          onChange={handleEmailChange}
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

