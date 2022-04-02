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
import { APPLICANT_TITLE_FIELD } from '../applicant/ApplicantTitle';
import { USER_TITLE_FIELD } from '../user/UserTitle';

export const EducationHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={'Education Histories'}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Additional Info" source="additionalInfo" />
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
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Created By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Institution Name" source="institutionName" />
        <BooleanField
          label="Is Current Institution"
          source="isCurrentInstitution"
        />
        <TextField label="Qualification Gained" source="qualificationGained" />
        <TextField label="Start Date" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Updated By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
