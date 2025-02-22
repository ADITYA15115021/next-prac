"use client"; 
import { signIn } from "next-auth/react";
import { useState } from "react";
//import { useSearchParams } from "next/navigation";

export default function SignInPage(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");

  //const searchParams = useSearchParams();
  //const error = searchParams.get("error"); 


  const handleLogin = async () => {
    setError("");
    const result = await signIn("adi", { email, password, redirect:false,callbackUrl:"/dashboard"});
    if(result?.error){
      console.log(result.error);
      setError(result.error);
    }else{
      window.location.href = "/dashboard"; // Redirect on success
  }
  }
    

  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          
          <div className="w-64 h-48  border rounded bg-white flex flex-col justify-evenly">
          
                <input className="text-black" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input className="text-black" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button className="bg-black text-white" onClick={handleLogin}>Sign In</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            
           

        </div>
     
    </div>
  );
}
