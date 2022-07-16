import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmploymentHistoryWhereInput = {
  additionalInfo?: StringNullableFilter;
  applicant?: ApplicantWhereUniqueInput;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  cityOfWork?: StringNullableFilter;
  companyName?: StringNullableFilter;
  countryOfWork?: StringNullableFilter;
  createdBy?: UserWhereUniqueInput;
  duties?: StringNullableFilter;
  employmentType?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isCurrentJob?: BooleanNullableFilter;
  jobTitle?: StringNullableFilter;
  nzBusinessNumber?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  updatedBy?: UserWhereUniqueInput;
};
