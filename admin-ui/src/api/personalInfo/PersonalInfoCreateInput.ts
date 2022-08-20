import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PersonalInfoCreateInput = {
  additionalInfo?: string | null;
  applicant?: ApplicantWhereUniqueInput | null;
  archived?: boolean | null;
  archivedBy?: UserWhereUniqueInput | null;
  countriesOfCitizenship?: string | null;
  countryOfBirth?: string | null;
  createdBy?: UserWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  homeCountryAddress?: string | null;
  inzClientNumber?: string | null;
  lastName?: string | null;
  mobile?: string | null;
  nzAddress?: string | null;
  passportNumber?: string | null;
  updatedBy?: UserWhereUniqueInput | null;
};
