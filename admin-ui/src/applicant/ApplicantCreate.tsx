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
import { TravelHistoryTitle } from "../travelHistory/TravelHistoryTitle";

export const ApplicantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Archived" source="archived" />
        <DateTimeInput label="Archived At" source="archivedAt" />
        <ReferenceInput source="user.id" reference="User" label="Archived By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="Created By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="educationHistories"
          reference="EducationHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employmentHistories"
          reference="EmploymentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmploymentHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="familyMembers"
          reference="FamilyMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FamilyMemberTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="personalinfo.id"
          reference="PersonalInfo"
          label="Personal Info"
        >
          <SelectInput optionText={PersonalInfoTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="travelHistories"
          reference="TravelHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TravelHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="updatedBy"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
