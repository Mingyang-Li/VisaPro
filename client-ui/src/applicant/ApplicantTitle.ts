import { Applicant as TApplicant } from '../api/applicant/Applicant';

export const APPLICANT_TITLE_FIELD = 'id';

export const ApplicantTitle = (record: TApplicant): string => {
  return record.id || record.id;
};
