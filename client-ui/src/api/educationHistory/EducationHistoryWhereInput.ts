import { StringNullableFilter } from '../../util/StringNullableFilter';
import { ApplicantWhereUniqueInput } from '../applicant/ApplicantWhereUniqueInput';
import { BooleanNullableFilter } from '../../util/BooleanNullableFilter';
import { UserWhereUniqueInput } from '../user/UserWhereUniqueInput';
import { StringFilter } from '../../util/StringFilter';
import { DateTimeNullableFilter } from '../../util/DateTimeNullableFilter';
import { DateTimeFilter } from '../../util/DateTimeFilter';

export type EducationHistoryWhereInput = {
  additionalInfo?: StringNullableFilter;
  applicant?: ApplicantWhereUniqueInput;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  city?: StringFilter;
  country?: StringFilter;
  createdBy?: UserWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  institutionName?: StringFilter;
  isCurrentInstitution?: BooleanNullableFilter;
  qualificationGained?: StringNullableFilter;
  startDate?: DateTimeFilter;
  updatedBy?: UserWhereUniqueInput;
};
