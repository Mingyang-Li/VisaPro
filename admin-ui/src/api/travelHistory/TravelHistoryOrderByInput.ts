import { SortOrder } from "../../util/SortOrder";

export type TravelHistoryOrderByInput = {
  createdAt?: SortOrder;
  destinationAirport?: SortOrder;
  destinationCity?: SortOrder;
  destinationCountry?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
