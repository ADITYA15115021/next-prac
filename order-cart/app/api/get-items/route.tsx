import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(reqest:NextRequest) {
    
  try {
    const products = await prisma.productDetails.findMany({
      where: { category: "ELECTRONICS" },
    });
    return Response.json(products);
  } catch (error) {
    console.error("Error fetching items", error);
    return Response.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
