// import { PrismaClient } from "@prisma/client"
// import Link from "next/link";


// const prisma = new PrismaClient();


// async function fetch() {
//     try {
//         const productList = await prisma.productDetails.findMany({
//             where:{
//                 category:"ELECTRONICS"
//             }})

//             if (!Array.isArray(productList)) {
//                 console.error("Expected an array but got:", productList);
//                 return [];
//             }

//             console.log(productList)

//             return productList;
//     } catch (error) {
//         console.log("Error fetching data")
//        return error; 
//     }
// }

// export default async function Electronics(){

//     const productList  = await fetch();

   
    
//     return(
//         <>
//            <div className="h-screen bg-gray-200 ">

//               <div className="h-16 border-b bg-white shadow-md ">
//                  <h2 className="py-6 text-center text-black">CATEGORY : ELECTRONICS </h2>
//               </div>

//               <div className="border border-black flex flex-row justify-center">
//                 <div className="m-4 w-[300px] flex flex-row justify-between">
//                     <input className="border border-black rounded-md text-black "></input>
//                     <button className="w-20 border rounded-full bg-white text-black">SEARCH</button>
//                 </div>

//               </div>
                
                

//                 <div className="grid grid-cols-3 gap-2 ">
//                  {
//                     productList.map( (product) => (
//                          <ItemCard key={product.id} product = {product}/>
//                     ) )
//                  }           
//                 </div>
//            </div>     

//         </>
//     )
// }



// function ItemCard({ product }) {
//     return (
//       <div className="flex flex-col bg-white border rounded-lg p-4">
//         <Link href={`/products/electronics/${product.id}`}>
//           <ul>
//             <li className="text-black">{product.productName}</li>
//             <li className="text-black">${product.price}</li>
//           </ul>
//         </Link>
//       </div>
//     );
//   }



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function Electronics() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await axios.get("/api/get-items");
        const data = res.data;
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    }
    loadProducts();
  }, []);

  function handleSearch() {
    const results = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results.length > 0 ? results : []);
  }

  return (
    <div className="h-screen bg-gray-200">
      <div className="h-16 border-b bg-white shadow-md">
        <h2 className="py-6 text-center text-black">CATEGORY: ELECTRONICS</h2>
      </div>

      <div className="flex flex-row justify-center">
        <div className="m-4 w-[300px] flex flex-row justify-between">
          <input
            className="border border-black rounded-md text-black px-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="w-20 border rounded-full bg-white text-black"
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-black col-span-3">Product not found</p>
        )}
      </div>
    </div>
  );
}

function ItemCard({ product }) {
  return (
    <div className="flex flex-col bg-white border rounded-lg p-4">
      <Link href={`/products/electronics/${product.id}`}>
        <ul>
          <li className="text-black">{product.productName}</li>
          <li className="text-black">${product.price}</li>
        </ul>
      </Link>
    </div>
  );
}
