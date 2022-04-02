import * as React from "react";

import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

import { PersonalInfoCreate } from "../personalInfo/PersonalInfoCreate";
import { EducationHistoryCreate } from "../educationHistory/EducationHistoryCreate";
import { EmploymentHistoryCreate } from "../employmentHistory/EmploymentHistoryCreate";
import { TravelHistoryCreate } from "../travelHistory/TravelHistoryCreate";
import { FamilyMemberCreate } from "../familyMember/FamilyMemberCreate";

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
