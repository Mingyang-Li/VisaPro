import { SortOrder } from "../../util/SortOrder";

export type TravelHistoryOrderByInput = {
  applicantId?: SortOrder;
  archived?: SortOrder;
  archivedById?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  dateDeparted?: SortOrder;
  dateEntered?: SortOrder;
  destinationCity?: SortOrder;
  destinationCountry?: SortOrder;
  destinationHub?: SortOrder;
  id?: SortOrder;
  reasonOfTravel?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
