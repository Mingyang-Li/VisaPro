import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { PERSONALINFO_TITLE_FIELD } from "../personalInfo/PersonalInfoTitle";
import { APPLICANT_TITLE_FIELD } from "../applicant/ApplicantTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Applicant"
          target="UserId"
          label="Applicants"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Archived" source="archived" />
            <TextField label="Archived At" source="archivedAt" />
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Personal Info"
              source="personalinfo.id"
              reference="PersonalInfo"
            >
              <TextField source={PERSONALINFO_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Applicant"
          target="UserId"
          label="Applicants"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Archived" source="archived" />
            <TextField label="Archived At" source="archivedAt" />
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Personal Info"
              source="personalinfo.id"
              reference="PersonalInfo"
            >
              <TextField source={PERSONALINFO_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Applicant"
          target="UserId"
          label="Applicants"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Archived" source="archived" />
            <TextField label="Archived At" source="archivedAt" />
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Personal Info"
              source="personalinfo.id"
              reference="PersonalInfo"
            >
              <TextField source={PERSONALINFO_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EducationHistory"
          target="UserId"
          label="Education Histories"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="City" source="city" />
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Institution Name" source="institutionName" />
            <BooleanField
              label="Is Current Institution"
              source="isCurrentInstitution"
            />
            <TextField
              label="Qualification Gained"
              source="qualificationGained"
            />
            <TextField label="Start Date" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EducationHistory"
          target="UserId"
          label="Education Histories"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="City" source="city" />
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Institution Name" source="institutionName" />
            <BooleanField
              label="Is Current Institution"
              source="isCurrentInstitution"
            />
            <TextField
              label="Qualification Gained"
              source="qualificationGained"
            />
            <TextField label="Start Date" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EducationHistory"
          target="UserId"
          label="Education Histories"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="City" source="city" />
            <TextField label="Country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Institution Name" source="institutionName" />
            <BooleanField
              label="Is Current Institution"
              source="isCurrentInstitution"
            />
            <TextField
              label="Qualification Gained"
              source="qualificationGained"
            />
            <TextField label="Start Date" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmploymentHistory"
          target="UserId"
          label="Employment Histories"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="City of Work" source="cityOfWokrk" />
            <TextField label="Company Name" source="companyName" />
            <TextField label="Country of Work" source="countryOfWork" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Duties" source="duties" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Current Job" source="isCurrentJob" />
            <TextField label="Job Title" source="jobTitle" />
            <TextField label="NZ Business Number" source="nzBusinessNumber" />
            <TextField label="Start Date" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmploymentHistory"
          target="UserId"
          label="Employment Histories"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="City of Work" source="cityOfWokrk" />
            <TextField label="Company Name" source="companyName" />
            <TextField label="Country of Work" source="countryOfWork" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Duties" source="duties" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Current Job" source="isCurrentJob" />
            <TextField label="Job Title" source="jobTitle" />
            <TextField label="NZ Business Number" source="nzBusinessNumber" />
            <TextField label="Start Date" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmploymentHistory"
          target="UserId"
          label="Employment Histories"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="City of Work" source="cityOfWokrk" />
            <TextField label="Company Name" source="companyName" />
            <TextField label="Country of Work" source="countryOfWork" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Duties" source="duties" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Current Job" source="isCurrentJob" />
            <TextField label="Job Title" source="jobTitle" />
            <TextField label="NZ Business Number" source="nzBusinessNumber" />
            <TextField label="Start Date" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FamilyMember"
          target="UserId"
          label="Family Members"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Archived" source="archived" />
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Countries of Citizenship"
              source="countriesOfCitizenship"
            />
            <TextField label="Country of Birth" source="countryOfBirth" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Date of Birth" source="dateOfBirth" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField
              label="Relationship to Applicant"
              source="relationshipToApplicant"
            />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FamilyMember"
          target="UserId"
          label="Family Members"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Archived" source="archived" />
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Countries of Citizenship"
              source="countriesOfCitizenship"
            />
            <TextField label="Country of Birth" source="countryOfBirth" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Date of Birth" source="dateOfBirth" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField
              label="Relationship to Applicant"
              source="relationshipToApplicant"
            />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FamilyMember"
          target="UserId"
          label="Family Members"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Archived" source="archived" />
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Countries of Citizenship"
              source="countriesOfCitizenship"
            />
            <TextField label="Country of Birth" source="countryOfBirth" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Date of Birth" source="dateOfBirth" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField
              label="Relationship to Applicant"
              source="relationshipToApplicant"
            />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PersonalInfo"
          target="UserId"
          label="Personal Infos"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Countries of Citizenship"
              source="countriesOfCitizenship"
            />
            <TextField label="Country of Birth" source="countryOfBirth" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Date of Birth" source="dateOfBirth" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField
              label="Home Country Address"
              source="homeCountryAddress"
            />
            <TextField label="ID" source="id" />
            <TextField label="INZ Client Number" source="inzClientNumber" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Modile" source="modile" />
            <TextField label="NZ Address" source="nzAddress" />
            <TextField label="Passport Number" source="passportNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PersonalInfo"
          target="UserId"
          label="Personal Infos"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Countries of Citizenship"
              source="countriesOfCitizenship"
            />
            <TextField label="Country of Birth" source="countryOfBirth" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Date of Birth" source="dateOfBirth" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField
              label="Home Country Address"
              source="homeCountryAddress"
            />
            <TextField label="ID" source="id" />
            <TextField label="INZ Client Number" source="inzClientNumber" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Modile" source="modile" />
            <TextField label="NZ Address" source="nzAddress" />
            <TextField label="Passport Number" source="passportNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PersonalInfo"
          target="UserId"
          label="Personal Infos"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Countries of Citizenship"
              source="countriesOfCitizenship"
            />
            <TextField label="Country of Birth" source="countryOfBirth" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Date of Birth" source="dateOfBirth" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField
              label="Home Country Address"
              source="homeCountryAddress"
            />
            <TextField label="ID" source="id" />
            <TextField label="INZ Client Number" source="inzClientNumber" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Modile" source="modile" />
            <TextField label="NZ Address" source="nzAddress" />
            <TextField label="Passport Number" source="passportNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TravelHistory"
          target="UserId"
          label="Travel Histories"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Date Departed" source="dateDeparted" />
            <TextField label="Date Entered" source="dateEntered" />
            <TextField
              label="Destination Airport"
              source="destinationAirport"
            />
            <TextField label="Destination City" source="destinationCity" />
            <TextField
              label="Destination Country"
              source="destinationCountry"
            />
            <TextField label="ID" source="id" />
            <TextField label="Reason of Travel" source="reasonOfTravel" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TravelHistory"
          target="UserId"
          label="Travel Histories"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Date Departed" source="dateDeparted" />
            <TextField label="Date Entered" source="dateEntered" />
            <TextField
              label="Destination Airport"
              source="destinationAirport"
            />
            <TextField label="Destination City" source="destinationCity" />
            <TextField
              label="Destination Country"
              source="destinationCountry"
            />
            <TextField label="ID" source="id" />
            <TextField label="Reason of Travel" source="reasonOfTravel" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TravelHistory"
          target="UserId"
          label="Travel Histories"
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
            <ReferenceField
              label="Archived By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Created By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Date Departed" source="dateDeparted" />
            <TextField label="Date Entered" source="dateEntered" />
            <TextField
              label="Destination Airport"
              source="destinationAirport"
            />
            <TextField label="Destination City" source="destinationCity" />
            <TextField
              label="Destination Country"
              source="destinationCountry"
            />
            <TextField label="ID" source="id" />
            <TextField label="Reason of Travel" source="reasonOfTravel" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Updated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
