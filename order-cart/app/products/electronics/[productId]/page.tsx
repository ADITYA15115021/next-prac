
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export default async function ProductDetails({ params }) {
  const product = await prisma.productDetails.findUnique({
    where: { id: parseInt(params.productId) },
  });

  if (!product) return <div>Product not found</div>;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">{product.productName}</h1>
        <p className="text-lg text-gray-700">${product.price}</p>
        <p className="text-gray-600">{product.category}</p>
      </div>
    </div>
  );
}
