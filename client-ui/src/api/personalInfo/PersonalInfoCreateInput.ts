import { ApplicantWhereUniqueInput } from '../applicant/ApplicantWhereUniqueInput';
import { UserWhereUniqueInput } from '../user/UserWhereUniqueInput';

export type PersonalInfoCreateInput = {
  applicant?: ApplicantWhereUniqueInput;
  archived?: boolean | null;
  archivedBy?: UserWhereUniqueInput | null;
  countriesOfCitizenship: string;
  countryOfBirth: string;
  createdBy?: UserWhereUniqueInput | null;
  dateOfBirth: Date;
  email?: string | null;
  firstName: string;
  homeCountryAddress?: string | null;
  inzClientNumber?: string | null;
  lastName: string;
  modile?: string | null;
  nzAddress?: string | null;
  passportNumber?: string | null;
  updatedBy?: UserWhereUniqueInput | null;
};
