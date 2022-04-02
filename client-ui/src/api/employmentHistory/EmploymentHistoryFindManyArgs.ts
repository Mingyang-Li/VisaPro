import { EmploymentHistoryWhereInput } from './EmploymentHistoryWhereInput';
import { EmploymentHistoryOrderByInput } from './EmploymentHistoryOrderByInput';

export type EmploymentHistoryFindManyArgs = {
  where?: EmploymentHistoryWhereInput;
  orderBy?: Array<EmploymentHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
