import * as React from 'react';

import {
  BooleanInput,
  Create,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

import { ApplicantTitle } from '../applicant/ApplicantTitle';
import { UserTitle } from '../user/UserTitle';

export const FamilyMemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applicant"
          reference="Applicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicantTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Archived" source="archived" />
        <ReferenceInput source="user.id" reference="User" label="Archived By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput
          label="Countries of Citizenship"
          source="countriesOfCitizenship"
        />
        <TextInput label="Country of Birth" source="countryOfBirth" />
        <ReferenceInput source="user.id" reference="User" label="Created By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date of Birth" source="dateOfBirth" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput
          label="Relationship to Applicant"
          source="relationshipToApplicant"
        />
        <ReferenceInput source="user.id" reference="User" label="Updated By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
