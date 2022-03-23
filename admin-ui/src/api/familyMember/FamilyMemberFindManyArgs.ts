import { FamilyMemberWhereInput } from "./FamilyMemberWhereInput";
import { FamilyMemberOrderByInput } from "./FamilyMemberOrderByInput";

export type FamilyMemberFindManyArgs = {
  where?: FamilyMemberWhereInput;
  orderBy?: Array<FamilyMemberOrderByInput>;
  skip?: number;
  take?: number;
};
