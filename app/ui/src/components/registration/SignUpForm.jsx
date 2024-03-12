import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

{/*Form that allows new customers to register an account*/}
const SignUpForm = () => {
  return (
    <form className="px-6 mx-auto">
    {/*Input field that allows users to input their usernames*/}
    <div className="mb-5">
      <b>
        {/*When user submits form, assign input to username variable*/}
        <input
          type="text"
          id="email"
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
        className="h-16 font-sans font-semibold bg-lemon rounded-lg text-xl w-40 rounded-2xl px-5 py-2.5 text-center"
      >
        Sign Up
      </button>
    </div>
  </form>
  );
}

export default SignUpForm

