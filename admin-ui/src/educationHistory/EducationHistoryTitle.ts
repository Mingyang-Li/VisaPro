import { EducationHistory as TEducationHistory } from "../api/educationHistory/EducationHistory";

export const EDUCATIONHISTORY_TITLE_FIELD = "id";

export const EducationHistoryTitle = (record: TEducationHistory): string => {
  return record.id || record.id;
};
