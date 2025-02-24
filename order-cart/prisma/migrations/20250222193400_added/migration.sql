/*
  Warnings:

  - You are about to drop the column `price` on the `OrderDetails` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `OrderDetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderDetails" DROP COLUMN "price",
DROP COLUMN "productName";

-- CreateTable
CREATE TABLE "ProductDetails" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProductDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetails_productId_key" ON "ProductDetails"("productId");

-- AddForeignKey
ALTER TABLE "OrderDetails" ADD CONSTRAINT "OrderDetails_productCode_fkey" FOREIGN KEY ("productCode") REFERENCES "ProductDetails"("productId") ON DELETE CASCADE ON UPDATE CASCADE;
