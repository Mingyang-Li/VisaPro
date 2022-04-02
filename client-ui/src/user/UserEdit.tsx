import * as React from 'react';

import {
  Edit,
  EditProps,
  PasswordInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

import { ApplicantTitle } from '../applicant/ApplicantTitle';
import { EducationHistoryTitle } from '../educationHistory/EducationHistoryTitle';
import { EmploymentHistoryTitle } from '../employmentHistory/EmploymentHistoryTitle';
import { FamilyMemberTitle } from '../familyMember/FamilyMemberTitle';
import { PersonalInfoTitle } from '../personalInfo/PersonalInfoTitle';
import { TravelHistoryTitle } from '../travelHistory/TravelHistoryTitle';
import { ROLES_OPTIONS } from '../user/RolesOptions';

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applicant"
          reference="Applicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applicant"
          reference="Applicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applicant"
          reference="Applicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applicant"
          reference="Applicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="educationhistory"
          reference="EducationHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="educationhistory"
          reference="EducationHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="educationhistory"
          reference="EducationHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationHistoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="employmenthistory"
          reference="EmploymentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmploymentHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employmenthistory"
          reference="EmploymentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmploymentHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employmenthistory"
          reference="EmploymentHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmploymentHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="familymember"
          reference="FamilyMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FamilyMemberTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="familymember"
          reference="FamilyMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FamilyMemberTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="familymember"
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
          source="personalinfo"
          reference="PersonalInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PersonalInfoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="personalinfo"
          reference="PersonalInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PersonalInfoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="personalinfo"
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
          source="travelhistory"
          reference="TravelHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TravelHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="travelhistory"
          reference="TravelHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TravelHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="travelhistory"
          reference="TravelHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TravelHistoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
