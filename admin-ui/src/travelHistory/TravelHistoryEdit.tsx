import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TravelHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Destination Airport" source="destinationAirport" />
        <TextInput label="Destination City" source="destinationCity" />
        <TextInput label="Destination Country" source="destinationCountry" />
      </SimpleForm>
    </Edit>
  );
};
