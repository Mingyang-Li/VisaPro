import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type EmploymentHistoryWhereInput = {
  additionalInfo?: StringNullableFilter;
  applicant?: ApplicantWhereUniqueInput;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  cityOfWokrk?: StringFilter;
  companyName?: StringFilter;
  countryOfWork?: StringFilter;
  createdBy?: UserWhereUniqueInput;
  duties?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isCurrentJob?: BooleanNullableFilter;
  jobTitle?: StringFilter;
  nzBusinessNumber?: StringFilter;
  startDate?: DateTimeFilter;
  updatedBy?: UserWhereUniqueInput;
};
