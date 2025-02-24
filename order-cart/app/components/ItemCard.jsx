
"use client"
import Link from "next/link";
export default function ItemCard({ product , baseUrl }) {
    return (
      <div className="flex flex-col bg-white border rounded-lg p-4">
        <Link href={`/products/electronics/${baseUrl}/${product.id}`}>
          <ul>
            <li className="text-black">{product.productName}</li>
            <li className="text-black">${product.price}</li>
          </ul>
        </Link>
      </div>
    );
  }