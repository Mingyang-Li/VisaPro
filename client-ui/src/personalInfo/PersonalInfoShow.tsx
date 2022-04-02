import * as React from 'react';

import {
  BooleanField,
  DateField,
  ReferenceField,
  Show,
  ShowProps,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

import { APPLICANT_TITLE_FIELD } from '../applicant/ApplicantTitle';
import { USER_TITLE_FIELD } from '../user/UserTitle';

export const PersonalInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Applicant"
          source="applicant.id"
          reference="Applicant"
        >
          <TextField source={APPLICANT_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Archived" source="archived" />
        <ReferenceField label="Archived By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="Countries of Citizenship"
          source="countriesOfCitizenship"
        />
        <TextField label="Country of Birth" source="countryOfBirth" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Created By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Date of Birth" source="dateOfBirth" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Home Country Address" source="homeCountryAddress" />
        <TextField label="ID" source="id" />
        <TextField label="INZ Client Number" source="inzClientNumber" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Modile" source="modile" />
        <TextField label="NZ Address" source="nzAddress" />
        <TextField label="Passport Number" source="passportNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Updated By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
