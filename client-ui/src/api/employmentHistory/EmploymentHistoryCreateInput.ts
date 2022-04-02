import { ApplicantWhereUniqueInput } from '../applicant/ApplicantWhereUniqueInput';
import { UserWhereUniqueInput } from '../user/UserWhereUniqueInput';

export type EmploymentHistoryCreateInput = {
  additionalInfo?: string | null;
  applicant?: ApplicantWhereUniqueInput | null;
  archived?: boolean | null;
  archivedBy?: UserWhereUniqueInput | null;
  cityOfWork: string;
  companyName: string;
  countryOfWork: string;
  createdBy?: UserWhereUniqueInput | null;
  duties?: string | null;
  endDate?: Date | null;
  isCurrentJob?: boolean | null;
  jobTitle: string;
  nzBusinessNumber: string;
  startDate: Date;
  updatedBy?: UserWhereUniqueInput | null;
};
