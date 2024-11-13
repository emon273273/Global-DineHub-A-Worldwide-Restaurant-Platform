import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";

function ForgetPassword() {
  const [email, setemail] = useState<string>("");

  const [loading, setloading] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex  flex-col gap-5 md:p-8 w-full max-w-md rounded">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
          <p className="text-sm text-gray-600">
            Enter your email address to reset your password
          </p>
        </div>
        <div className=" flex  items-center justify-center relative w-3/4 mx-auto ">
          <Input
            type="text"
            placeholder="Enter Your Email"
            className="pl-10"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
        </div>
        <div className=" sm:flex sm:flex-col  md:flex md:flex-row md:justify-between  md:gap-2 md:align-center ">
          <div className="flex justify-center">
            {loading ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin " /> Please
                wait...
              </Button>
            ) : (
              <Button className="w-3/4 md:w-auto  rounded-xl ">
                Send Reset Link
              </Button>
            )}
          </div>
          <span className="">
            Back to{" "}
            <a href="/login" className="text-blue-600  underline">
              Login
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default ForgetPassword;