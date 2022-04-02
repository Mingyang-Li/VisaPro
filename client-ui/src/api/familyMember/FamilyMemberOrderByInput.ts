import { SortOrder } from '../../util/SortOrder';

export type FamilyMemberOrderByInput = {
  archived?: SortOrder;
  archivedById?: SortOrder;
  countriesOfCitizenship?: SortOrder;
  countryOfBirth?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  dateOfBirth?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  relationshipToApplicant?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
