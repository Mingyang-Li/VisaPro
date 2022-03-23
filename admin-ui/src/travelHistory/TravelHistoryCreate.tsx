import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TravelHistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Destination Airport" source="destinationAirport" />
        <TextInput label="Destination City" source="destinationCity" />
        <TextInput label="Destination Country" source="destinationCountry" />
      </SimpleForm>
    </Create>
  );
};
