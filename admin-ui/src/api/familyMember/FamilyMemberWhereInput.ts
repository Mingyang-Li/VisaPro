import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicantListRelationFilter } from "../applicant/ApplicantListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FamilyMemberWhereInput = {
  additionalInfo?: StringNullableFilter;
  applicants?: ApplicantListRelationFilter;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  countriesOfCitizenship?: StringNullableFilter;
  countryOfBirth?: StringNullableFilter;
  createdBy?: UserWhereUniqueInput;
  dateOfBirth?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  relationshipToApplicant?: StringNullableFilter;
  updatedBy?: UserWhereUniqueInput;
};
