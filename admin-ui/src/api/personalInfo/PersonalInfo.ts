import { Applicant } from "../applicant/Applicant";
import { User } from "../user/User";

export type PersonalInfo = {
  applicant?: Applicant;
  archived: boolean | null;
  archivedBy?: User | null;
  countriesOfCitizenship: string | null;
  countryOfBirth: string | null;
  createdAt: Date | null;
  createdBy?: User | null;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  homeCountryAddress: string | null;
  id: string;
  inzClientNumber: string | null;
  lastName: string | null;
  modile: string | null;
  nzAddress: string | null;
  passportNumber: string | null;
  updatedAt: Date | null;
  updatedBy?: User | null;
};
