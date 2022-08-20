import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  BooleanField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { APPLICANT_TITLE_FIELD } from "../applicant/ApplicantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TravelHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Travel Histories"}
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
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Created By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Date Departed" source="dateDeparted" />
        <TextField label="Date Entered" source="dateEntered" />
        <TextField label="Destination City" source="destinationCity" />
        <TextField label="Destination Country" source="destinationCountry" />
        <TextField label="Destination Hub" source="destinationHub" />
        <TextField label="ID" source="id" />
        <TextField label="Reason of Travel" source="reasonOfTravel" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Updated By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
