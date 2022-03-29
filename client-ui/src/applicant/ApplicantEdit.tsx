import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
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

export const ApplicantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
          source="educationhistory"
          reference="EducationHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employmenthistory"
          reference="EmploymentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmploymentHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="familymember"
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
          source="travelhistory"
          reference="TravelHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TravelHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="user"
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
    </Edit>
  );
};
