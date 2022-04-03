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
        <BooleanField label="Archived" source="archived" />
        <TextField label="Archived At" source="archivedAt" />
        <DateField source="createdAt" label="Created At" />
      </Datagrid>
    </List>
  );
};
