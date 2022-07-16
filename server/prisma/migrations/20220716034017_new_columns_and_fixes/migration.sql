/*
  Warnings:

  - You are about to drop the column `modile` on the `PersonalInfo` table. All the data in the column will be lost.
  - You are about to drop the column `destinationAirport` on the `TravelHistory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmploymentHistory" ADD COLUMN     "employmentType" TEXT;

-- AlterTable
ALTER TABLE "PersonalInfo" DROP COLUMN "modile",
ADD COLUMN     "mobile" TEXT;

-- AlterTable
ALTER TABLE "TravelHistory" DROP COLUMN "destinationAirport",
ADD COLUMN     "destinationHub" TEXT;
