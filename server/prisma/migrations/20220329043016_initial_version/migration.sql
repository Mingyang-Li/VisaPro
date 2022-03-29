/*
  Warnings:

  - You are about to drop the `EducationHiatory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cityOfWokrk` to the `EmploymentHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `EmploymentHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryOfWork` to the `EmploymentHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobTitle` to the `EmploymentHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nzBusinessNumber` to the `EmploymentHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `EmploymentHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countriesOfCitizenship` to the `FamilyMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryOfBirth` to the `FamilyMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `FamilyMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `FamilyMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relationshipToApplicant` to the `FamilyMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateEntered` to the `TravelHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reasonOfTravel` to the `TravelHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmploymentHistory" ADD COLUMN     "additionalInfo" TEXT,
ADD COLUMN     "applicantId" TEXT,
ADD COLUMN     "archived" BOOLEAN,
ADD COLUMN     "archivedById" TEXT,
ADD COLUMN     "cityOfWokrk" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "countryOfWork" TEXT NOT NULL,
ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "duties" TEXT,
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "isCurrentJob" BOOLEAN,
ADD COLUMN     "jobTitle" TEXT NOT NULL,
ADD COLUMN     "nzBusinessNumber" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "FamilyMember" ADD COLUMN     "archived" BOOLEAN,
ADD COLUMN     "archivedById" TEXT,
ADD COLUMN     "countriesOfCitizenship" TEXT NOT NULL,
ADD COLUMN     "countryOfBirth" TEXT NOT NULL,
ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "relationshipToApplicant" TEXT NOT NULL,
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "TravelHistory" ADD COLUMN     "applicantId" TEXT,
ADD COLUMN     "archived" BOOLEAN,
ADD COLUMN     "archivedById" TEXT,
ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "dateDeparted" TIMESTAMP(3),
ADD COLUMN     "dateEntered" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "reasonOfTravel" TEXT NOT NULL,
ADD COLUMN     "updatedById" TEXT;

-- DropTable
DROP TABLE "EducationHiatory";

-- CreateTable
CREATE TABLE "EducationHistory" (
    "additionalInfo" TEXT,
    "applicantId" TEXT,
    "archived" BOOLEAN,
    "archivedById" TEXT,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    "endDate" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "institutionName" TEXT NOT NULL,
    "isCurrentInstitution" BOOLEAN,
    "qualificationGained" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "EducationHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalInfo" (
    "applicantId" TEXT NOT NULL,
    "archived" BOOLEAN,
    "archivedById" TEXT,
    "countriesOfCitizenship" TEXT NOT NULL,
    "countryOfBirth" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "firstName" TEXT NOT NULL,
    "homeCountryAddress" TEXT,
    "id" TEXT NOT NULL,
    "inzClientNumber" TEXT,
    "lastName" TEXT NOT NULL,
    "modile" TEXT,
    "nzAddress" TEXT,
    "passportNumber" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applicant" (
    "archived" BOOLEAN,
    "archivedAt" TIMESTAMP(3),
    "archivedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,
    "id" TEXT NOT NULL,
    "personalInfoId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_applicantsUpdated" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ApplicantToFamilyMember" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_applicantsUpdated_AB_unique" ON "_applicantsUpdated"("A", "B");

-- CreateIndex
CREATE INDEX "_applicantsUpdated_B_index" ON "_applicantsUpdated"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ApplicantToFamilyMember_AB_unique" ON "_ApplicantToFamilyMember"("A", "B");

-- CreateIndex
CREATE INDEX "_ApplicantToFamilyMember_B_index" ON "_ApplicantToFamilyMember"("B");

-- AddForeignKey
ALTER TABLE "EmploymentHistory" ADD CONSTRAINT "EmploymentHistory_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmploymentHistory" ADD CONSTRAINT "EmploymentHistory_archivedById_fkey" FOREIGN KEY ("archivedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmploymentHistory" ADD CONSTRAINT "EmploymentHistory_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmploymentHistory" ADD CONSTRAINT "EmploymentHistory_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationHistory" ADD CONSTRAINT "EducationHistory_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationHistory" ADD CONSTRAINT "EducationHistory_archivedById_fkey" FOREIGN KEY ("archivedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationHistory" ADD CONSTRAINT "EducationHistory_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationHistory" ADD CONSTRAINT "EducationHistory_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelHistory" ADD CONSTRAINT "TravelHistory_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelHistory" ADD CONSTRAINT "TravelHistory_archivedById_fkey" FOREIGN KEY ("archivedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelHistory" ADD CONSTRAINT "TravelHistory_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelHistory" ADD CONSTRAINT "TravelHistory_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_archivedById_fkey" FOREIGN KEY ("archivedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyMember" ADD CONSTRAINT "FamilyMember_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD CONSTRAINT "PersonalInfo_archivedById_fkey" FOREIGN KEY ("archivedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD CONSTRAINT "PersonalInfo_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD CONSTRAINT "PersonalInfo_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_archivedById_fkey" FOREIGN KEY ("archivedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_applicantsUpdated" ADD FOREIGN KEY ("A") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_applicantsUpdated" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicantToFamilyMember" ADD FOREIGN KEY ("A") REFERENCES "Applicant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicantToFamilyMember" ADD FOREIGN KEY ("B") REFERENCES "FamilyMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;
