import { ApplicantWhereUniqueInput } from '../applicant/ApplicantWhereUniqueInput';
import { UserWhereUniqueInput } from '../user/UserWhereUniqueInput';

export type EducationHistoryUpdateInput = {
  additionalInfo?: string | null;
  applicant?: ApplicantWhereUniqueInput | null;
  archived?: boolean | null;
  archivedBy?: UserWhereUniqueInput | null;
  city?: string;
  country?: string;
  createdBy?: UserWhereUniqueInput | null;
  endDate?: Date | null;
  institutionName?: string;
  isCurrentInstitution?: boolean | null;
  qualificationGained?: string | null;
  startDate?: Date;
  updatedBy?: UserWhereUniqueInput | null;
};
