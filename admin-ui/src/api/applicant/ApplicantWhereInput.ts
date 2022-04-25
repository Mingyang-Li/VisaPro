import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EducationHistoryListRelationFilter } from "../educationHistory/EducationHistoryListRelationFilter";
import { EmploymentHistoryListRelationFilter } from "../employmentHistory/EmploymentHistoryListRelationFilter";
import { FamilyMemberListRelationFilter } from "../familyMember/FamilyMemberListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PersonalInfoWhereUniqueInput } from "../personalInfo/PersonalInfoWhereUniqueInput";
import { TravelHistoryListRelationFilter } from "../travelHistory/TravelHistoryListRelationFilter";

export type ApplicantWhereInput = {
  archived?: BooleanNullableFilter;
  archivedAt?: DateTimeNullableFilter;
  archivedBy?: UserWhereUniqueInput;
  createdBy?: UserWhereUniqueInput;
  educationHistories?: EducationHistoryListRelationFilter;
  employmentHistories?: EmploymentHistoryListRelationFilter;
  familyMembers?: FamilyMemberListRelationFilter;
  id?: StringFilter;
  personalInfo?: PersonalInfoWhereUniqueInput;
  travelHistories?: TravelHistoryListRelationFilter;
  updatedBy?: UserWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
