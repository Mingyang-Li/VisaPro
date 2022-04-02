import { ApplicantCreateNestedManyWithoutUsersInput } from './ApplicantCreateNestedManyWithoutUsersInput';
import { EducationHistoryCreateNestedManyWithoutUsersInput } from './EducationHistoryCreateNestedManyWithoutUsersInput';
import { EmploymentHistoryCreateNestedManyWithoutUsersInput } from './EmploymentHistoryCreateNestedManyWithoutUsersInput';
import { FamilyMemberCreateNestedManyWithoutUsersInput } from './FamilyMemberCreateNestedManyWithoutUsersInput';
import { PersonalInfoCreateNestedManyWithoutUsersInput } from './PersonalInfoCreateNestedManyWithoutUsersInput';
import { TravelHistoryCreateNestedManyWithoutUsersInput } from './TravelHistoryCreateNestedManyWithoutUsersInput';

export type UserCreateInput = {
  applicants?: ApplicantCreateNestedManyWithoutUsersInput;
  applicantsArchived?: ApplicantCreateNestedManyWithoutUsersInput;
  applicantsCreated?: ApplicantCreateNestedManyWithoutUsersInput;
  applicantsUpdated?: ApplicantCreateNestedManyWithoutUsersInput;
  educationHistoriesArchived?: EducationHistoryCreateNestedManyWithoutUsersInput;
  educationHistoriesCreated?: EducationHistoryCreateNestedManyWithoutUsersInput;
  educationHistoriesUpdated?: EducationHistoryCreateNestedManyWithoutUsersInput;
  email?: string | null;
  employmentHistoriesArchived?: EmploymentHistoryCreateNestedManyWithoutUsersInput;
  employmentHistoriesCreated?: EmploymentHistoryCreateNestedManyWithoutUsersInput;
  employmentHistoriesUpdated?: EmploymentHistoryCreateNestedManyWithoutUsersInput;
  familyMembersArchived?: FamilyMemberCreateNestedManyWithoutUsersInput;
  familyMembersCreated?: FamilyMemberCreateNestedManyWithoutUsersInput;
  familyMembersUpdated?: FamilyMemberCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  personalInfosArchived?: PersonalInfoCreateNestedManyWithoutUsersInput;
  personalInfosCreated?: PersonalInfoCreateNestedManyWithoutUsersInput;
  personalInfosUpdated?: PersonalInfoCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  travelHistoriesArchived?: TravelHistoryCreateNestedManyWithoutUsersInput;
  travelHistoriesCreated?: TravelHistoryCreateNestedManyWithoutUsersInput;
  travelHistoriesUpdated?: TravelHistoryCreateNestedManyWithoutUsersInput;
  username: string;
};
