import { FamilyMember as TFamilyMember } from "../api/familyMember/FamilyMember";

export const FAMILYMEMBER_TITLE_FIELD = "id";

export const FamilyMemberTitle = (record: TFamilyMember): string => {
  return record.id || record.id;
};
