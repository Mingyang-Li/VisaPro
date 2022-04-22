/*
  Warnings:

  - You are about to drop the column `applicantId` on the `PersonalInfo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[personalInfoId]` on the table `Applicant` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "PersonalInfo" DROP CONSTRAINT "PersonalInfo_applicantId_fkey";

-- AlterTable
ALTER TABLE "PersonalInfo" DROP COLUMN "applicantId";

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_personalInfoId_key" ON "Applicant"("personalInfoId");

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_personalInfoId_fkey" FOREIGN KEY ("personalInfoId") REFERENCES "PersonalInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
