import { ApplicantUpdateManyWithoutFamilyMembersInput } from "./ApplicantUpdateManyWithoutFamilyMembersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FamilyMemberUpdateInput = {
  additionalInfo?: string | null;
  applicants?: ApplicantUpdateManyWithoutFamilyMembersInput;
  archived?: boolean | null;
  archivedBy?: UserWhereUniqueInput | null;
  countriesOfCitizenship?: string | null;
  countryOfBirth?: string | null;
  createdBy?: UserWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  relationshipToApplicant?: string | null;
  updatedBy?: UserWhereUniqueInput | null;
};
