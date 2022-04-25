import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TravelHistoryWhereInput = {
  applicant?: ApplicantWhereUniqueInput;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  createdBy?: UserWhereUniqueInput;
  dateDeparted?: DateTimeNullableFilter;
  dateEntered?: DateTimeNullableFilter;
  destinationAirport?: StringNullableFilter;
  destinationCity?: StringNullableFilter;
  destinationCountry?: StringNullableFilter;
  id?: StringFilter;
  reasonOfTravel?: StringNullableFilter;
  updatedBy?: UserWhereUniqueInput;
};
