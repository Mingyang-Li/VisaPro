import { EducationHistory as TEducationHistory } from "../api/educationHistory/EducationHistory";

export const EDUCATIONHISTORY_TITLE_FIELD = "institutionName";

export const EducationHistoryTitle = (record: TEducationHistory): string => {
  return record.institutionName || record.id;
};
