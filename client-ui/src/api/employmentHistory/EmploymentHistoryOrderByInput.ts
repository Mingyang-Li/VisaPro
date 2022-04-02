import { SortOrder } from '../../util/SortOrder';

export type EmploymentHistoryOrderByInput = {
  additionalInfo?: SortOrder;
  applicantId?: SortOrder;
  archived?: SortOrder;
  archivedById?: SortOrder;
  cityOfWork?: SortOrder;
  companyName?: SortOrder;
  countryOfWork?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  duties?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isCurrentJob?: SortOrder;
  jobTitle?: SortOrder;
  nzBusinessNumber?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
