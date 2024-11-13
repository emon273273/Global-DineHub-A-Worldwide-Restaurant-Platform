import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { logintype, loginSchema } from "@/schema/userSchema";

import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

//interface

// interface logininterface {
//   email: string;
//   password: string;
// }
function Login() {
  const [loading, setloading] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const [input, setinput] = useState<logintype>({
    email: "",
    password: "",
  });

  // onchange input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setinput({
      ...input,
      [name]: value,
    });
  };

  // on submit
  const loginform = (e: FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse(input);

    if (!result.success) {
      const fieldError = result.error.formErrors.fieldErrors;
      setErrors(fieldError);
      return;
    } else {
      setErrors({});
    }
    console.log(input);
  };
  return (
    <div className="flex items-center justify-center min-h-screen w-screen border bg-red-50 ">
      <form
        className=" md:p-8 md:w-full max-w-md rounded-lg  md:border  border-gray-700"
        onClick={loginform}
      >
        <h1 className="font-bold text-2xl text-center">Global-DineHub</h1>
        <div>
          <div className="relative mb-6">
            <Label className=" pl-2 ">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              className="pl-8 focus-visible:ring-1"
              onChange={handleChange}
              name="email"
              value={input.email}
            />
            <Mail className=" absolute inset-y-7 left-1 text-gray-400  pointer-events-none" />
            {errors.email && <p className="text-red-500">{errors.email[0]}</p>}
          </div>
          <div className="relative">
            <Label className=" pl-2">Password</Label>
            <Input
              type="password"
              placeholder="Password"
              className="pl-8 focus-visible:ring-1"
              onChange={handleChange}
              value={input.password}
              name="password"
            />
            <LockKeyhole className="absolute inset-y-7 left-1 text-gray-400  pointer-events-none" />
            {errors.password && (
              <p className="text-red-500">{errors.password[0]}</p>
            )}
          </div>
        </div>

        <div className="mt-8 ">
          {loading ? (
            <Button className="bg-destructive w-full rounded-xl" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </Button>
          ) : (
            <Button className="bg-destructive w-full rounded-xl" type="submit">
              Login
            </Button>
          )}
          <div>
            <Link to="/forgetpassword">
              <p className="mt-4 text-center">Forgot Password?</p>
            </Link>
          </div>
        </div>
        <Separator className="my-6" />
        <p>Dont have an account?</p>
        <div className="mt-6">
          <Link to={"/signup"}>
            <Button className="w-full rounded-xl">Sign Up</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
