import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmploymentHistoryUpdateInput = {
  additionalInfo?: string | null;
  applicant?: ApplicantWhereUniqueInput | null;
  archived?: boolean | null;
  archivedBy?: UserWhereUniqueInput | null;
  cityOfWork?: string | null;
  companyName?: string | null;
  countryOfWork?: string | null;
  createdBy?: UserWhereUniqueInput | null;
  duties?: string | null;
  employmentType?: string | null;
  endDate?: Date | null;
  isCurrentJob?: boolean | null;
  jobTitle?: string | null;
  nzBusinessNumber?: string | null;
  startDate?: Date | null;
  updatedBy?: UserWhereUniqueInput | null;
};
