import { EmploymentHistory as TEmploymentHistory } from "../api/employmentHistory/EmploymentHistory";

export const EMPLOYMENTHISTORY_TITLE_FIELD = "companyName";

export const EmploymentHistoryTitle = (record: TEmploymentHistory): string => {
  return record.companyName || record.id;
};
