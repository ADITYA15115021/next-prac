

"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session) return <p>Not authenticated</p>;

  return (
    <div className="h-screen bg-gray-200">


    <main>


      <div className="fixed top-0 w-full left-0 h-16 bg-white border-b border-gray-200 shadow-md 
                     flex justify-between items-center">

        <div className="flex flex-row w-2/3 justify-evenly
              text-black ">
            <div className="text-xl cursor-pointer font-semibold hover:text-green-300">weORDER</div>
            <div onClick={() => { router.push("/products") }} className="cursor-pointer font-semibold hover:text-green-600 ">Products</div>
            <div className="cursor-pointer font-semibold hover:text-green-600">Docs</div>
            <div className="cursor-pointer font-semibold hover:text-green-600">About Us</div>

        </div>

        <div className=" w-1/3 flex justify-center">
            <button className="w-24 bg-black border rounded-md" onClick={() => signOut()}>LOGOUT</button>
        </div>

      </div>

      <div className="mt-14 flex flex-col items-center justify-center p-4 text-center max-w-lg mx-auto">
        <div className="p-4 text-black text-6xl break-words">
          Welcome to weOrder! <br /> <span className="text-green-700">All your needs end here.</span> </div>
        <div className="text-lg sm:text-xl md:text-2xl text-gray-500 mt-2">We provide a platform where customers and sellers can collborate with each other.
                        <br/>
                       We intend to provide a safe and fostering environment for all  
        </div>
      </div>

      <div className="h-10  flex flex-row justify-evenly">
         <button className="px-3 border rounded-lg bg-green-600">EXPLORE CATEGORIES</button>
         <button className="px-3 border rounded-lg flex-grow-0 bg-gray-600">BECOME A MEMBER </button>
      </div>

      <div className="grid grid-cols-2">

      </div>

     


    </main>

    <footer className="">

    </footer>

      

      
        
        
         


    </div>

     
      
      
      
     
   
  );
}
