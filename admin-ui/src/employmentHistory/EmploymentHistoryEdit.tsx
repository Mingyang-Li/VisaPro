import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { ApplicantTitle } from "../applicant/ApplicantTitle";
import { UserTitle } from "../user/UserTitle";

export const EmploymentHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Additional Info" multiline source="additionalInfo" />
        <ReferenceInput
          source="applicant.id"
          reference="Applicant"
          label="Applicant"
        >
          <SelectInput optionText={ApplicantTitle} />
        </ReferenceInput>
        <BooleanInput label="Archived" source="archived" />
        <ReferenceInput source="user.id" reference="User" label="Archived By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="City of Work" source="cityOfWokrk" />
        <TextInput label="Company Name" source="companyName" />
        <TextInput label="Country of Work" source="countryOfWork" />
        <ReferenceInput source="user.id" reference="User" label="Created By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Duties" multiline source="duties" />
        <DateTimeInput label="End Date" source="endDate" />
        <BooleanInput label="Is Current Job" source="isCurrentJob" />
        <TextInput label="Job Title" source="jobTitle" />
        <TextInput label="NZ Business Number" source="nzBusinessNumber" />
        <DateTimeInput label="Start Date" source="startDate" />
        <ReferenceInput source="user.id" reference="User" label="Updated By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
