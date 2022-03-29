import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EducationHistoryUpdateManyWithoutApplicantsInput } from "./EducationHistoryUpdateManyWithoutApplicantsInput";
import { EmploymentHistoryUpdateManyWithoutApplicantsInput } from "./EmploymentHistoryUpdateManyWithoutApplicantsInput";
import { FamilyMemberUpdateManyWithoutApplicantsInput } from "./FamilyMemberUpdateManyWithoutApplicantsInput";
import { PersonalInfoWhereUniqueInput } from "../personalInfo/PersonalInfoWhereUniqueInput";
import { TravelHistoryUpdateManyWithoutApplicantsInput } from "./TravelHistoryUpdateManyWithoutApplicantsInput";
import { UserUpdateManyWithoutApplicantsInput } from "./UserUpdateManyWithoutApplicantsInput";

export type ApplicantUpdateInput = {
  archived?: boolean | null;
  archivedAt?: Date | null;
  archivedBy?: UserWhereUniqueInput | null;
  createdBy?: UserWhereUniqueInput | null;
  educationHistories?: EducationHistoryUpdateManyWithoutApplicantsInput;
  employmentHistories?: EmploymentHistoryUpdateManyWithoutApplicantsInput;
  familyMembers?: FamilyMemberUpdateManyWithoutApplicantsInput;
  personalInfo?: PersonalInfoWhereUniqueInput | null;
  travelHistories?: TravelHistoryUpdateManyWithoutApplicantsInput;
  updatedBy?: UserUpdateManyWithoutApplicantsInput;
  user?: UserWhereUniqueInput | null;
};
