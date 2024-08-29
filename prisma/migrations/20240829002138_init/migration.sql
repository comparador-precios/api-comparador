/*
  Warnings:

  - Added the required column `addres` to the `Supermercado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCiudad` to the `Supermercado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Supermercado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Supermercado" ADD COLUMN     "addres" TEXT NOT NULL,
ADD COLUMN     "idCiudad" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Ciudad" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idDepartamento" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Departamento" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Supermercado" ADD CONSTRAINT "Supermercado_idCiudad_fkey" FOREIGN KEY ("idCiudad") REFERENCES "Ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ciudad" ADD CONSTRAINT "Ciudad_idDepartamento_fkey" FOREIGN KEY ("idDepartamento") REFERENCES "Departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
