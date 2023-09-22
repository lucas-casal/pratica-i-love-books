/*
  Warnings:

  - A unique constraint covering the columns `[cover]` on the table `books` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cover` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "cover" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "books_cover_key" ON "books"("cover");
