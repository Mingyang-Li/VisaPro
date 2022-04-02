import { Applicant } from '../applicant/Applicant';
import { User } from '../user/User';

export type EducationHistory = {
  additionalInfo: string | null;
  applicant?: Applicant | null;
  archived: boolean | null;
  archivedBy?: User | null;
  city: string;
  country: string;
  createdAt: Date;
  createdBy?: User | null;
  endDate: Date | null;
  id: string;
  institutionName: string;
  isCurrentInstitution: boolean | null;
  qualificationGained: string | null;
  startDate: Date;
  updatedAt: Date;
  updatedBy?: User | null;
};
