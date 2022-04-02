import { PersonalInfoWhereInput } from './PersonalInfoWhereInput';
import { PersonalInfoOrderByInput } from './PersonalInfoOrderByInput';

export type PersonalInfoFindManyArgs = {
  where?: PersonalInfoWhereInput;
  orderBy?: Array<PersonalInfoOrderByInput>;
  skip?: number;
  take?: number;
};
