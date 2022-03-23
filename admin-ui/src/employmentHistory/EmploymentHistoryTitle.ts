import { EmploymentHistory as TEmploymentHistory } from "../api/employmentHistory/EmploymentHistory";

export const EMPLOYMENTHISTORY_TITLE_FIELD = "id";

export const EmploymentHistoryTitle = (record: TEmploymentHistory): string => {
  return record.id || record.id;
};
