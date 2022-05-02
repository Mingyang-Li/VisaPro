/*
  Warnings:

  - You are about to drop the `_applicantsUpdated` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_applicantsUpdated" DROP CONSTRAINT "_applicantsUpdated_A_fkey";

-- DropForeignKey
ALTER TABLE "_applicantsUpdated" DROP CONSTRAINT "_applicantsUpdated_B_fkey";

-- AlterTable
ALTER TABLE "Applicant" ADD COLUMN     "updatedById" TEXT,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "EducationHistory" ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "institutionName" DROP NOT NULL,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "EmploymentHistory" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "companyName" DROP NOT NULL,
ALTER COLUMN "countryOfWork" DROP NOT NULL,
ALTER COLUMN "jobTitle" DROP NOT NULL,
ALTER COLUMN "nzBusinessNumber" DROP NOT NULL,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "cityOfWork" DROP NOT NULL;

-- AlterTable
ALTER TABLE "FamilyMember" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "countriesOfCitizenship" DROP NOT NULL,
ALTER COLUMN "countryOfBirth" DROP NOT NULL,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "relationshipToApplicant" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PersonalInfo" ALTER COLUMN "countriesOfCitizenship" DROP NOT NULL,
ALTER COLUMN "countryOfBirth" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "dateOfBirth" DROP NOT NULL,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TravelHistory" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "dateEntered" DROP NOT NULL,
ALTER COLUMN "reasonOfTravel" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- DropTable
DROP TABLE "_applicantsUpdated";

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
