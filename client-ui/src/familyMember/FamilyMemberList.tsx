import * as React from 'react';

import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  ListProps,
  ReferenceField,
  TextField,
} from 'react-admin';

import Pagination from '../Components/Pagination';
import { USER_TITLE_FIELD } from '../user/UserTitle';

export const FamilyMemberList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={'Family Members'}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
