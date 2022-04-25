import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EducationHistoryWhereInput = {
  additionalInfo?: StringNullableFilter;
  applicant?: ApplicantWhereUniqueInput;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  createdBy?: UserWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  institutionName?: StringNullableFilter;
  isCurrentInstitution?: BooleanNullableFilter;
  qualificationGained?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  updatedBy?: UserWhereUniqueInput;
};
