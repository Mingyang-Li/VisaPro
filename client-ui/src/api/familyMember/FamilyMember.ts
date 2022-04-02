import { Applicant } from '../applicant/Applicant';
import { User } from '../user/User';

export type FamilyMember = {
  applicants?: Array<Applicant>;
  archived: boolean | null;
  archivedBy?: User | null;
  countriesOfCitizenship: string;
  countryOfBirth: string;
  createdAt: Date;
  createdBy?: User | null;
  dateOfBirth: Date | null;
  firstName: string;
  id: string;
  lastName: string;
  relationshipToApplicant: string;
  updatedAt: Date;
  updatedBy?: User | null;
};
