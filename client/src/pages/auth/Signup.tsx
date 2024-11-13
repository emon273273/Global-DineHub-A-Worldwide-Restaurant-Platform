import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SignupType, userSchema } from "@/schema/userSchema";

import { CircleUser, Loader2, LockKeyhole, Mail, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

//interface

// interface signupinterface {
//   fullname:string;
//   email: string;
//   password: string;
//   contact:string;
// }
function Signup() {
  const [loading, setloading] = useState(false);

  const [errors, setErrors] = useState<any>({});

  const [input, setinput] = useState<SignupType>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
    confirmpassword: "",
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
  const submitform = (e: FormEvent) => {
    e.preventDefault();

    const result = userSchema.safeParse(input);
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
        className=" md:p-8 md:w-full max-w-md rounded-lg  md:border  border-gray-700  "
        onSubmit={submitform}
      >
        <h1 className="font-bold text-2xl text-center">Global-DineHub</h1>
        <div className="mt-6">
          {/* full name */}
          <div className="relative mb-6">
            <Label className=" pl-2 ">Your Name</Label>
            <Input
              type="text"
              placeholder="Fullname"
              className="pl-8 focus-visible:ring-1 "
              onChange={handleChange}
              name="fullname"
              value={input.fullname}
            />
            <User className=" absolute inset-y-7 left-1 text-gray-400  pointer-events-none" />
            {errors.fullname && (
              <p className="text-red-500">{errors.fullname[0]}</p>
            )}
          </div>

          {/* contact */}
          <div className="relative mb-6">
            <Label className=" pl-2 ">Contact</Label>
            <Input
              type="text"
              placeholder="Contact"
              className="pl-8 focus-visible:ring-1"
              onChange={handleChange}
              name="contact"
              value={input.contact}
            />
            <CircleUser className=" absolute inset-y-7 left-1 text-gray-400  pointer-events-none" />
            {errors.contact && (
              <p className="text-red-500">{errors.contact[0]}</p>
            )}
          </div>
          {/*  */}
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
            {errors.email && <p className="text-red-500">{errors.email[2]}</p>}
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

          {/* confirm password */}
          <div className="relative mt-6">
            <Label className=" pl-2">Confirm Password</Label>
            <Input
              type="confirmpassword"
              placeholder="Confirm Password"
              className="pl-8 focus-visible:ring-1"
              onChange={handleChange}
              value={input.confirmpassword}
              name="confirmpassword"
            />
            <LockKeyhole className="absolute inset-y-7 left-1 text-gray-400  pointer-events-none" />
            {errors.confirmpassword && (
              <p className="text-red-500">{errors.confirmpassword[0]}</p>
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
              SignUp
            </Button>
          )}
        </div>
        <Separator className="my-6" />
        <p>Already have an account ?</p>
        <div className="mt-6">
          <Link to={"/login"}>
            <Button className="w-full rounded-xl">Login</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
