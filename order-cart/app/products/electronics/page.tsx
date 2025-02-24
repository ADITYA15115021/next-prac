import { PrismaClient } from "@prisma/client"
import Link from "next/link";


const prisma = new PrismaClient();


async function fetch() {
    try {
        const productList = await prisma.productDetails.findMany({
            where:{
                category:"ELECTRONICS"
            }})

            if (!Array.isArray(productList)) {
                console.error("Expected an array but got:", productList);
                return [];
            }

            console.log(productList)

            return productList;
    } catch (error) {
        console.log("Error fetching data")
       return error; 
    }
}

export default async function Electronics(){

    const productList  = await fetch();

   
    
    return(
        <>
           <div className="h-screen bg-gray-200 ">
                
                <div>
                    
                </div>

                <div className="grid grid-cols-3 gap-2 ">
                 {
                    productList.map( (product) => (
                         <ItemCard key={product.id} product = {product}/>
                    ) )
                 }           
                </div>
           </div>     

        </>
    )
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