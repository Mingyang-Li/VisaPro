import { TravelHistory as TTravelHistory } from '../api/travelHistory/TravelHistory';

export const TRAVELHISTORY_TITLE_FIELD = 'destinationAirport';

export const TravelHistoryTitle = (record: TTravelHistory): string => {
  return record.destinationAirport || record.id;
};
