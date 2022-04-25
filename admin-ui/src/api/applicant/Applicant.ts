import { User } from "../user/User";
import { EducationHistory } from "../educationHistory/EducationHistory";
import { EmploymentHistory } from "../employmentHistory/EmploymentHistory";
import { FamilyMember } from "../familyMember/FamilyMember";
import { PersonalInfo } from "../personalInfo/PersonalInfo";
import { TravelHistory } from "../travelHistory/TravelHistory";

export type Applicant = {
  archived: boolean | null;
  archivedAt: Date | null;
  archivedBy?: User | null;
  createdAt: Date | null;
  createdBy?: User | null;
  educationHistories?: Array<EducationHistory>;
  employmentHistories?: Array<EmploymentHistory>;
  familyMembers?: Array<FamilyMember>;
  id: string;
  personalInfo?: PersonalInfo | null;
  travelHistories?: Array<TravelHistory>;
  updatedAt: Date | null;
  updatedBy?: User | null;
  user?: User | null;
};
