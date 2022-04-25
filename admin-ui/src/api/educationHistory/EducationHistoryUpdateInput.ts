import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EducationHistoryUpdateInput = {
  additionalInfo?: string | null;
  applicant?: ApplicantWhereUniqueInput | null;
  archived?: boolean | null;
  archivedBy?: UserWhereUniqueInput | null;
  city?: string | null;
  country?: string | null;
  createdBy?: UserWhereUniqueInput | null;
  endDate?: Date | null;
  institutionName?: string | null;
  isCurrentInstitution?: boolean | null;
  qualificationGained?: string | null;
  startDate?: Date | null;
  updatedBy?: UserWhereUniqueInput | null;
};
