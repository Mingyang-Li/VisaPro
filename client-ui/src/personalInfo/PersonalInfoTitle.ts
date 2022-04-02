import { PersonalInfo as TPersonalInfo } from '../api/personalInfo/PersonalInfo';

export const PERSONALINFO_TITLE_FIELD = 'firstName';

export const PersonalInfoTitle = (record: TPersonalInfo): string => {
  return record.firstName || record.id;
};
