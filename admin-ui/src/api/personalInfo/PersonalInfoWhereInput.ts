import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PersonalInfoWhereInput = {
  additionalInfo?: StringNullableFilter;
  applicant?: ApplicantWhereUniqueInput;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  countriesOfCitizenship?: StringNullableFilter;
  countryOfBirth?: StringNullableFilter;
  createdBy?: UserWhereUniqueInput;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  homeCountryAddress?: StringNullableFilter;
  id?: StringFilter;
  inzClientNumber?: StringNullableFilter;
  lastName?: StringNullableFilter;
  mobile?: StringNullableFilter;
  nzAddress?: StringNullableFilter;
  passportNumber?: StringNullableFilter;
  updatedBy?: UserWhereUniqueInput;
};
