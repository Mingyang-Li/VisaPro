import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { APPLICANT_TITLE_FIELD } from "../applicant/ApplicantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PersonalInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Personal Infos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
        <TextField label="Mobile" source="mobile" />
        <TextField label="NZ Address" source="nzAddress" />
        <TextField label="Passport Number" source="passportNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Updated By" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
