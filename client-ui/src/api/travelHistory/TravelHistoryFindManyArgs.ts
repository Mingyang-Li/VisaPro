import { TravelHistoryWhereInput } from "./TravelHistoryWhereInput";
import { TravelHistoryOrderByInput } from "./TravelHistoryOrderByInput";

export type TravelHistoryFindManyArgs = {
  where?: TravelHistoryWhereInput;
  orderBy?: Array<TravelHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
