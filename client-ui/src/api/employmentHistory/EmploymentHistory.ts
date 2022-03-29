import { Applicant } from "../applicant/Applicant";
import { User } from "../user/User";

export type EmploymentHistory = {
  additionalInfo: string | null;
  applicant?: Applicant | null;
  archived: boolean | null;
  archivedBy?: User | null;
  cityOfWokrk: string;
  companyName: string;
  countryOfWork: string;
  createdAt: Date;
  createdBy?: User | null;
  duties: string | null;
  endDate: Date | null;
  id: string;
  isCurrentJob: boolean | null;
  jobTitle: string;
  nzBusinessNumber: string;
  startDate: Date;
  updatedAt: Date;
  updatedBy?: User | null;
};
