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
import { PERSONALINFO_TITLE_FIELD } from '../personalInfo/PersonalInfoTitle';

export const ApplicantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={'Applicants'}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Personal Info"
          source="personalinfo.id"
          reference="PersonalInfo"
        >
          <TextField source={PERSONALINFO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Archived" source="archived" />
        <TextField label="Archived At" source="archivedAt" />
        <ReferenceField label="Archived By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Created By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
