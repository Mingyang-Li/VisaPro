import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { ApplicantTitle } from "../applicant/ApplicantTitle";
import { UserTitle } from "../user/UserTitle";

export const EducationHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Additional Info" multiline source="additionalInfo" />
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
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <ReferenceInput source="user.id" reference="User" label="Created By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Institution Name" source="institutionName" />
        <BooleanInput
          label="Is Current Institution"
          source="isCurrentInstitution"
        />
        <TextInput label="Qualification Gained" source="qualificationGained" />
        <DateTimeInput label="Start Date" source="startDate" />
        <ReferenceInput source="user.id" reference="User" label="Updated By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
