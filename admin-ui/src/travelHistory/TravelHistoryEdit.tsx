import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ApplicantTitle } from "../applicant/ApplicantTitle";
import { UserTitle } from "../user/UserTitle";

export const TravelHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <ReferenceInput source="user.id" reference="User" label="Created By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date Departed" source="dateDeparted" />
        <DateTimeInput label="Date Entered" source="dateEntered" />
        <TextInput label="Destination Airport" source="destinationAirport" />
        <TextInput label="Destination City" source="destinationCity" />
        <TextInput label="Destination Country" source="destinationCountry" />
        <TextInput label="Reason of Travel" source="reasonOfTravel" />
        <ReferenceInput source="user.id" reference="User" label="Updated By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
