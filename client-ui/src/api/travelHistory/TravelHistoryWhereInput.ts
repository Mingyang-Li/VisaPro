import { ApplicantWhereUniqueInput } from '../applicant/ApplicantWhereUniqueInput';
import { BooleanNullableFilter } from '../../util/BooleanNullableFilter';
import { UserWhereUniqueInput } from '../user/UserWhereUniqueInput';
import { DateTimeNullableFilter } from '../../util/DateTimeNullableFilter';
import { DateTimeFilter } from '../../util/DateTimeFilter';
import { StringNullableFilter } from '../../util/StringNullableFilter';
import { StringFilter } from '../../util/StringFilter';

export type TravelHistoryWhereInput = {
  applicant?: ApplicantWhereUniqueInput;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  createdBy?: UserWhereUniqueInput;
  dateDeparted?: DateTimeNullableFilter;
  dateEntered?: DateTimeFilter;
  destinationAirport?: StringNullableFilter;
  destinationCity?: StringNullableFilter;
  destinationCountry?: StringNullableFilter;
  id?: StringFilter;
  reasonOfTravel?: StringFilter;
  updatedBy?: UserWhereUniqueInput;
};
