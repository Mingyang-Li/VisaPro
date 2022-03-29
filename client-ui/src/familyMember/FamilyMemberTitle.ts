import { FamilyMember as TFamilyMember } from "../api/familyMember/FamilyMember";

export const FAMILYMEMBER_TITLE_FIELD = "firstName";

export const FamilyMemberTitle = (record: TFamilyMember): string => {
  return record.firstName || record.id;
};
