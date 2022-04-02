import * as React from 'react';
import { BooleanInput, Create, CreateProps, SimpleForm } from 'react-admin';
import { EducationHistoryCreate } from '../educationHistory/EducationHistoryCreate';
import { EmploymentHistoryCreate } from '../employmentHistory/EmploymentHistoryCreate';
import { FamilyMemberCreate } from '../familyMember/FamilyMemberCreate';
import { PersonalInfoCreate } from '../personalInfo/PersonalInfoCreate';
import { TravelHistoryCreate } from '../travelHistory/TravelHistoryCreate';

export const ApplicantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <PersonalInfoCreate />
        <EducationHistoryCreate />
        <EmploymentHistoryCreate />
        <TravelHistoryCreate />
        <FamilyMemberCreate />
        <BooleanInput label="Archived" source="archived" />
      </SimpleForm>
    </Create>
  );
};
