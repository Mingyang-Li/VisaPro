import { EducationHiatory as TEducationHiatory } from "../api/educationHiatory/EducationHiatory";

export const EDUCATIONHIATORY_TITLE_FIELD = "id";

export const EducationHiatoryTitle = (record: TEducationHiatory): string => {
  return record.id || record.id;
};
