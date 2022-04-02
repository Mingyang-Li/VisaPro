import { ApplicantCreateNestedManyWithoutFamilyMembersInput } from './ApplicantCreateNestedManyWithoutFamilyMembersInput';
import { UserWhereUniqueInput } from '../user/UserWhereUniqueInput';

export type FamilyMemberCreateInput = {
  applicants?: ApplicantCreateNestedManyWithoutFamilyMembersInput;
  archived?: boolean | null;
  archivedBy?: UserWhereUniqueInput | null;
  countriesOfCitizenship: string;
  countryOfBirth: string;
  createdBy?: UserWhereUniqueInput | null;
  dateOfBirth?: Date | null;
  firstName: string;
  lastName: string;
  relationshipToApplicant: string;
  updatedBy?: UserWhereUniqueInput | null;
};
