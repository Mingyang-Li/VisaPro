import { ApplicantListRelationFilter } from '../applicant/ApplicantListRelationFilter';
import { BooleanNullableFilter } from '../../util/BooleanNullableFilter';
import { UserWhereUniqueInput } from '../user/UserWhereUniqueInput';
import { StringFilter } from '../../util/StringFilter';
import { DateTimeNullableFilter } from '../../util/DateTimeNullableFilter';

export type FamilyMemberWhereInput = {
  applicants?: ApplicantListRelationFilter;
  archived?: BooleanNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  countriesOfCitizenship?: StringFilter;
  countryOfBirth?: StringFilter;
  createdBy?: UserWhereUniqueInput;
  dateOfBirth?: DateTimeNullableFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  relationshipToApplicant?: StringFilter;
  updatedBy?: UserWhereUniqueInput;
};
