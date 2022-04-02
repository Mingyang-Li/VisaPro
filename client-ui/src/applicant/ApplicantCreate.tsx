import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EducationHistoryTitle } from "../educationHistory/EducationHistoryTitle";
import { EmploymentHistoryTitle } from "../employmentHistory/EmploymentHistoryTitle";
import { FamilyMemberTitle } from "../familyMember/FamilyMemberTitle";
import { PersonalInfoTitle } from "../personalInfo/PersonalInfoTitle";
import { PersonalInfoCreate } from "../personalInfo/PersonalInfoCreate";
import { EducationHistoryCreate } from "../educationHistory/EducationHistoryCreate";
import { TravelHistoryTitle } from "../travelHistory/TravelHistoryTitle";
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
