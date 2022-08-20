import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  DateField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FamilyMemberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Additional Info" source="additionalInfo" />
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
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField
          label="Relationship to Applicant"
          source="relationshipToApplicant"
        />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Updated By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
