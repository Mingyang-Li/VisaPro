import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TravelHistoryWhereInput = {
  additionalInfo?: StringNullableFilter;
  applicant?: ApplicantWhereUniqueInput;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  createdBy?: UserWhereUniqueInput;
  dateDeparted?: DateTimeNullableFilter;
  dateEntered?: DateTimeNullableFilter;
  destinationCity?: StringNullableFilter;
  destinationCountry?: StringNullableFilter;
  destinationHub?: StringNullableFilter;
  id?: StringFilter;
  reasonOfTravel?: StringNullableFilter;
  updatedBy?: UserWhereUniqueInput;
};
