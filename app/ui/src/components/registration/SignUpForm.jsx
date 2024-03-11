import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

{/*Form that allows new customers to register an account*/}
const SignUpForm = () => {
  return (
    <div>
                <img className="w-40 h-40 m-auto mb-2" src="/images/OaxacaLogo.png" alt="Oaxaca Logo" />
                    <div class="flex justify-center">

                    <form className="flex max-w-md flex-col gap-4">
                        <div className="text-2xl font-sans font-semibold text-center">Customer Sign Up</div>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" placeholder="Email" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" type="password" placeholder="Password" required />
                        </div>
                        <div className="flex justify-center">
                          <Button type="submit" className="h-16 font-sans font-semibold text-cherry bg-lemon rounded-lg text-xl w-40 rounded-2xl px-5 py-2.5 text-center">Sign Up</Button>
                        </div>
                        </form>
    
                    </div>
                </div>
  );
}

export default SignUpForm

