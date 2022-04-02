import * as React from 'react';

import {
  BooleanInput,
  Create,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

import { ApplicantTitle } from '../applicant/ApplicantTitle';
import { UserTitle } from '../user/UserTitle';

export const EmploymentHistoryCreate = (
  props: CreateProps,
): React.ReactElement => {
  return (
    <Create {...props}>
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
        <TextInput label="City of Work" source="cityOfWork" />
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
    </Create>
  );
};
