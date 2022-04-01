import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { ApplicantTitle } from "../applicant/ApplicantTitle";
import { EducationHistoryTitle } from "../educationHistory/EducationHistoryTitle";
import { EmploymentHistoryTitle } from "../employmentHistory/EmploymentHistoryTitle";
import { FamilyMemberTitle } from "../familyMember/FamilyMemberTitle";
import { PersonalInfoTitle } from "../personalInfo/PersonalInfoTitle";
import { TravelHistoryTitle } from "../travelHistory/TravelHistoryTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applicants"
          reference="Applicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applicantsArchived"
          reference="Applicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applicantsCreated"
          reference="Applicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applicantsUpdated"
          reference="Applicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="educationHistoriesArchived"
          reference="EducationHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="educationHistoriesCreated"
          reference="EducationHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="educationHistoriesUpdated"
          reference="EducationHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationHistoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="employmentHistoriesArchived"
          reference="EmploymentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmploymentHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employmentHistoriesCreated"
          reference="EmploymentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmploymentHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employmentHistoriesUpdated"
          reference="EmploymentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmploymentHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="familyMembersArchived"
          reference="FamilyMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FamilyMemberTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="familyMembersCreated"
          reference="FamilyMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FamilyMemberTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="familyMembersUpdated"
          reference="FamilyMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FamilyMemberTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="personalInfosArchived"
          reference="PersonalInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PersonalInfoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="personalInfosCreated"
          reference="PersonalInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PersonalInfoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="personalInfosUpdated"
          reference="PersonalInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PersonalInfoTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="travelHistoriesArchived"
          reference="TravelHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TravelHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="travelHistoriesCreated"
          reference="TravelHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TravelHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="travelHistoriesUpdated"
          reference="TravelHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TravelHistoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
