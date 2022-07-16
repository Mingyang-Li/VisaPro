import { TravelHistory as TTravelHistory } from "../api/travelHistory/TravelHistory";

export const TRAVELHISTORY_TITLE_FIELD = "destinationCity";

export const TravelHistoryTitle = (record: TTravelHistory): string => {
  return record.destinationCity || record.id;
};
