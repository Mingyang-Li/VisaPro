import { Applicant } from "../applicant/Applicant";
import { User } from "../user/User";

export type PersonalInfo = {
  applicant?: Applicant;
  archived: boolean | null;
  archivedBy?: User | null;
  countriesOfCitizenship: string;
  countryOfBirth: string;
  createdAt: Date;
  createdBy?: User | null;
  dateOfBirth: Date;
  email: string | null;
  firstName: string;
  homeCountryAddress: string | null;
  id: string;
  inzClientNumber: string | null;
  lastName: string;
  modile: string | null;
  nzAddress: string | null;
  passportNumber: string | null;
  updatedAt: Date;
  updatedBy?: User | null;
};
