import { PrismaClient} from "@prisma/client";
import ItemCard from  "../../components/ItemCard.jsx";


const prisma = new PrismaClient();


async function fetchBooks(){
     try {
        const books = await prisma.productDetails.findMany({
            where:{
                category:"BOOKS"
            }
        })
        return books;
     } catch (error) {
        console.log('error fetching book items !',error.code);
     }
}

export default async function Books() {
    
    const books = await fetchBooks(); 

    return (
        <>

         <div className="h-screen bg-gray-200 grid grid-cols-3 gap-2 grid-rows-6">
         {
            books.map( (book) => (
                <ItemCard key={book.id} product={book} baseUrl = "books"/>
            ) )
        }

         </div>
        
        </>
    )
}

