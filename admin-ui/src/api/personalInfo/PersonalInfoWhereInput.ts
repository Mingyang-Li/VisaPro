import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PersonalInfoWhereInput = {
  applicant?: ApplicantWhereUniqueInput;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  countriesOfCitizenship?: StringFilter;
  countryOfBirth?: StringFilter;
  createdBy?: UserWhereUniqueInput;
  dateOfBirth?: DateTimeFilter;
  email?: StringNullableFilter;
  firstName?: StringFilter;
  homeCountryAddress?: StringNullableFilter;
  id?: StringFilter;
  inzClientNumber?: StringNullableFilter;
  lastName?: StringFilter;
  modile?: StringNullableFilter;
  nzAddress?: StringNullableFilter;
  passportNumber?: StringNullableFilter;
  updatedBy?: UserWhereUniqueInput;
};
