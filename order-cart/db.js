
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insert({category,productId,productName,price}){
    try {
        const dbResponse = await prisma.productDetails.create({
            data:{
               category:category,
               productId:productId,
               productName:productName,
               price:price
            }
        })
        console.log(dbResponse);
    } catch (error) {
        console.log(error)
    }
}

insert({ 
    category: "BOOKS", 
    productId: 3007, 
    productName: "PROBABILITY", 
    price: 340.90 
});
