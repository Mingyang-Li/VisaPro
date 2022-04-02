/*
  Warnings:

  - You are about to drop the column `cityOfWokrk` on the `EmploymentHistory` table. All the data in the column will be lost.
  - Added the required column `cityOfWork` to the `EmploymentHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmploymentHistory" DROP COLUMN "cityOfWokrk",
ADD COLUMN     "cityOfWork" TEXT NOT NULL;
