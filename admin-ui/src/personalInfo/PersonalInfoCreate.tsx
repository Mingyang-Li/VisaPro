import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ApplicantTitle } from "../applicant/ApplicantTitle";
import { UserTitle } from "../user/UserTitle";

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
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Home Country Address" source="homeCountryAddress" />
        <TextInput label="INZ Client Number" source="inzClientNumber" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Mobile" source="mobile" />
        <TextInput label="NZ Address" source="nzAddress" />
        <TextInput label="Passport Number" source="passportNumber" />
        <ReferenceInput source="user.id" reference="User" label="Updated By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
