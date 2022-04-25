import { Applicant } from "../applicant/Applicant";
import { User } from "../user/User";

export type EducationHistory = {
  additionalInfo: string | null;
  applicant?: Applicant | null;
  archived: boolean | null;
  archivedBy?: User | null;
  city: string | null;
  country: string | null;
  createdAt: Date | null;
  createdBy?: User | null;
  endDate: Date | null;
  id: string;
  institutionName: string | null;
  isCurrentInstitution: boolean | null;
  qualificationGained: string | null;
  startDate: Date | null;
  updatedAt: Date | null;
  updatedBy?: User | null;
};
