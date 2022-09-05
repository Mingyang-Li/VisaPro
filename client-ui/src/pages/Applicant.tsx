import { Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import AppContainer from '../templates/appContainer/AppContainer';
import { EducationHistoryForm } from '../templates/educationHistoryForm/EducationHistoryForm';
import { EmploymentHistoryForm } from '../templates/employmentHistoryForm/EmploymentHistoryForm';
import { FamilyMemberForm } from '../templates/familyMemberForm/FamilyMemberForm';
import { PersonalInfoForm } from '../templates/personalInfoForm/PersonalInfoForm';
import { BasicTabs, ITab } from '../templates/tabs/Tabs';
import { TravelHistoryForm } from '../templates/travelHistoryForm/TravelHistoryForm';

const Contents: React.FC = () => {
  const { id } = useParams();
  const contents: ITab[] = [
    {
      label: 'Personal Info',
      component: <PersonalInfoForm />,
    },
    {
      label: 'Education Histories',
      component: <EducationHistoryForm />,
    },
    {
      label: 'Employment Histories',
      component: <EmploymentHistoryForm />,
    },
    {
      label: 'Travel Histories',
      component: <TravelHistoryForm />,
    },
    {
      label: 'Family Members',
      component: <FamilyMemberForm />,
    },
  ];

  return (
    <Grid container spacing={2}>
      <h1>Applicant ID: {id}</h1>
      <BasicTabs tabs={contents} />
    </Grid>
  );
};

const Applicant: React.FC = () => (
  <AppContainer title="Applicant" contents={<Contents />} />
);

export default Applicant;
