import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TravelHistoryWhereInput = {
  destinationAirport?: StringNullableFilter;
  destinationCity?: StringNullableFilter;
  destinationCountry?: StringNullableFilter;
  id?: StringFilter;
};
