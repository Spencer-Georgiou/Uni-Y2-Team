import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const SignUpForm = () => {
  return (
    <form className="flex max-w-md flex-col gap-4 flex items-center">
      <div>
        <div className="mb-1 block">
          <Label htmlFor="email1" value="Your Email:" />
        </div>
        <TextInput id="email1" type="email" class="bg-yellow-300 focus:ring-4 focus:outline-amber focus:ring-amber font-medium rounded-lg text-center mb-2" placeholder="Email" required />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="password1" value="Your Password:" />
        </div>
        <TextInput id="password1" type="Password" class="bg-yellow-300 focus:ring-4 focus:outline-amber focus:ring-amber font-medium rounded-lg text-center mb-6" placeholder="Password" required />
      </div>
      <Button type="submit" class="text-rose bg-yellow-300 focus:ring-4 focus:outline-amber focus:ring-amber font-medium rounded-lg text-sm text-center mb-4">Sign Up</Button>
    </form>
  );
}

export default SignUpForm

