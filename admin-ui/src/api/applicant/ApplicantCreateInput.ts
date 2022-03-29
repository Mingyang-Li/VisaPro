import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EducationHistoryCreateNestedManyWithoutApplicantsInput } from "./EducationHistoryCreateNestedManyWithoutApplicantsInput";
import { EmploymentHistoryCreateNestedManyWithoutApplicantsInput } from "./EmploymentHistoryCreateNestedManyWithoutApplicantsInput";
import { FamilyMemberCreateNestedManyWithoutApplicantsInput } from "./FamilyMemberCreateNestedManyWithoutApplicantsInput";
import { PersonalInfoWhereUniqueInput } from "../personalInfo/PersonalInfoWhereUniqueInput";
import { TravelHistoryCreateNestedManyWithoutApplicantsInput } from "./TravelHistoryCreateNestedManyWithoutApplicantsInput";
import { UserCreateNestedManyWithoutApplicantsInput } from "./UserCreateNestedManyWithoutApplicantsInput";

export type ApplicantCreateInput = {
  archived?: boolean | null;
  archivedAt?: Date | null;
  archivedBy?: UserWhereUniqueInput | null;
  createdBy?: UserWhereUniqueInput | null;
  educationHistories?: EducationHistoryCreateNestedManyWithoutApplicantsInput;
  employmentHistories?: EmploymentHistoryCreateNestedManyWithoutApplicantsInput;
  familyMembers?: FamilyMemberCreateNestedManyWithoutApplicantsInput;
  personalInfo?: PersonalInfoWhereUniqueInput | null;
  travelHistories?: TravelHistoryCreateNestedManyWithoutApplicantsInput;
  updatedBy?: UserCreateNestedManyWithoutApplicantsInput;
  user?: UserWhereUniqueInput | null;
};
