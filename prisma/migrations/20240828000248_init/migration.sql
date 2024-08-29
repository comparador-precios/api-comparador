/*
  Warnings:

  - Added the required column `description` to the `Supermercado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Supermercado" ADD COLUMN     "description" TEXT NOT NULL;
