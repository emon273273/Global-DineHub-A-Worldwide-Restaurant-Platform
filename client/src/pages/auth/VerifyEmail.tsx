import { Input } from "@/components/ui/input"
import { useState } from "react"

function VerifyEmail() {

    const [otp,setotp]=useState<string[]>(["","","","","",""])
  return (
    <div className="flex items-center justify-center min-h-screen w-full border ">
            <div className="p-8 rounded-md w-full max-w-md  flex flex-col gap-10 border border-gray-200">
                <div className="text-center">
                <h1 className=" font-extrabold text-2xl">
                 Verify Your Email 
                </h1>
                <p className="text-sm text-gray-600">Enter your digit code</p>
                </div>
                <form action="">

                    <div className="flex justify-center gap-2">
                        {otp.map((item:string,index:number)=>(
                            <Input
                            key={index}
                            type="text"

                            className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline"
                            />
                        ))}
                    </div>
                </form>
            </div>

    </div>
  )
}

export default VerifyEmail