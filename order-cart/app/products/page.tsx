
"use client"

import { useRouter } from "next/navigation"

export default function Products(){
    const router = useRouter();
    return (
        <>
         <div className="h-screen bg-gray-200">
            <div className="h-16 border-b shadow-md bg-white flex flex-row justify-between items-center">
                <div className="flex-1 text-black text-3xl  font-semibold">CATEGORIES</div>
                <div className="w-[200px] border border-black flex justify-center">
                    <button className="text-black">
                        SIGNOUT
                    </button>
                </div>   
            </div>

        <div className="flex justify-center">

            <div className="border flex flex-row gap-6 w-[400px]">
                <input className="flex-1 g-white border rounded-full " type="text"></input>
                <button className="w-1/4  border rounded-full bg-white text-black">SEARCH</button>
            </div>
          
        </div>   

    <div className="bg-gray-200 grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div onClick={()=>{router.push("/products/books")}} className="bg-white border border-gray-200 shadow-gray-300 shadow-lg  text-black p-6 rounded-lg h-48 md:h-48
            cursor-pointer flex justify-center items-center text-3xl font-semibold">BOOKS</div>

        <div onClick={()=>{router.push("products/electronics")}} className="cursor-pointer bg-white text-black
         flex justify-center items-center p-6 text-3xl rounded-lg h-48 hover:border-2 hover:border-green-600">ELECTRONICS</div>
        
        <div className="bg-white text-white p-6 rounded-lg h-48 ">Card 3</div>
        
        <div className="bg-white text-white p-6 rounded-lg h-48 ">Card 4</div>
        
        <div className="bg-white text-white p-6 rounded-lg h-40 md:h-48">Card 5</div>
    </div>

        


         </div>

        
         

        </>
    )

}

    
