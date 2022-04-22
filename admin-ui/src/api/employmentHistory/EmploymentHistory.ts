import { Applicant } from "../applicant/Applicant";
import { User } from "../user/User";

export type EmploymentHistory = {
  additionalInfo: string | null;
  applicant?: Applicant | null;
  archived: boolean | null;
  archivedBy?: User | null;
  cityOfWork: string | null;
  companyName: string | null;
  countryOfWork: string | null;
  createdAt: Date | null;
  createdBy?: User | null;
  duties: string | null;
  endDate: Date | null;
  id: string;
  isCurrentJob: boolean | null;
  jobTitle: string | null;
  nzBusinessNumber: string | null;
  startDate: Date | null;
  updatedAt: Date | null;
  updatedBy?: User | null;
};
