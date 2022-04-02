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

export const PersonalInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="applicant.id"
          reference="Applicant"
          label="Applicant"
        >
          <SelectInput optionText={ApplicantTitle} />
        </ReferenceInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Country of Birth" source="countryOfBirth" />
        <TextInput label="Email" source="email" type="email" />
        <DateTimeInput label="Date of Birth" source="dateOfBirth" />
        <TextInput label="Home Country Address" source="homeCountryAddress" />
        <TextInput label="INZ Client Number" source="inzClientNumber" />
        <TextInput label="Modile" source="modile" />
        <TextInput label="NZ Address" source="nzAddress" />
        <TextInput label="Passport Number" source="passportNumber" />
        <TextInput
          label="Countries of Citizenship"
          source="countriesOfCitizenship"
        />
        <ReferenceInput source="user.id" reference="User" label="Updated By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <BooleanInput label="Archived" source="archived" />
        <ReferenceInput source="user.id" reference="User" label="Archived By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
