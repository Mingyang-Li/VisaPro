import { SortOrder } from "../../util/SortOrder";

export type TravelHistoryOrderByInput = {
  applicantId?: SortOrder;
  archived?: SortOrder;
  archivedById?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  dateDeparted?: SortOrder;
  dateEntered?: SortOrder;
  destinationAirport?: SortOrder;
  destinationCity?: SortOrder;
  destinationCountry?: SortOrder;
  id?: SortOrder;
  reasonOfTravel?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
