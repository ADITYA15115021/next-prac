

"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  if (!session) return <p>Not authenticated</p>;

  return (
    <div className="h-screen bg-gray-200">


    <main>


      <div className="relative h-16 bg-white border-b border-gray-200 shadow-md 
                     flex justify-between items-center mx-auto lg:container lg:px-16 xl:px-20">

        <div className="flex flex-row w-2/3 justify-evenly
              text-black ">
            <div className="text-xl cursor-pointer font-semibold hover:text-green-300">weORDER</div>
            <div className="cursor-pointer font-semibold hover:text-green-600 ">Products</div>
            <div className="cursor-pointer font-semibold hover:text-green-600">About Us</div>
        </div>

        <div className=" w-1/3 flex justify-center">
            <button className="w-24 bg-black border rounded-md" onClick={() => signOut()}>LOGOUT</button>
        </div>

      </div>

      <div className="pt-[90px] lg:pt-[90px] lg:min-h-[300px] 
                     flex flex-col items-center justify-center 
                     bg-white border rounded-lg border-gray-200 shadow
                     m-6 ">
        <div className="p-4 text-black text-6xl break-words">
          Welcome to weOrder! <br /> <span className="text-green-700">All your needs end here.</span> </div>
        <div className="px-4 mt-4 text-black text-xl">We provide a platform where customers and sellers can collborate with each other.
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
