import { Applicant } from "../applicant/Applicant";
import { User } from "../user/User";

export type FamilyMember = {
  applicants?: Array<Applicant>;
  archived: boolean | null;
  archivedBy?: User | null;
  countriesOfCitizenship: string | null;
  countryOfBirth: string | null;
  createdAt: Date | null;
  createdBy?: User | null;
  dateOfBirth: Date | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  relationshipToApplicant: string | null;
  updatedAt: Date | null;
  updatedBy?: User | null;
};
