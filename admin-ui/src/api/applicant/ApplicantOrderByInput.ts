import { SortOrder } from "../../util/SortOrder";

export type ApplicantOrderByInput = {
  archived?: SortOrder;
  archivedAt?: SortOrder;
  archivedById?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  personalInfoId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
