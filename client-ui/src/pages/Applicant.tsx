import { Grid } from '@mui/material';
import React from 'react';
import AppContainer from '../templates/appContainer/AppContainer';
import { EducationHistoryForm } from '../templates/educationHistoryForm/EducationHistoryForm';
import { EmploymentHistoryForm } from '../templates/employmentHistoryForm/EmploymentHistoryForm';
import { FamilyMemberForm } from '../templates/familyMemberForm/FamilyMemberForm';
import { PersonalInfoForm } from '../templates/personalInfoForm/PersonalInfoForm';
import { BasicTabs, Tab } from '../templates/tabs/Tabs';
import { TravelHistoryForm } from '../templates/travelHistoryForm/TravelHistoryForm';

const Contents: React.FC = () => {
  const contents: Tab[] = [
    {
      label: 'Personal Info',
      component: <PersonalInfoForm />,
    },
    {
      label: 'Education History',
      component: <EducationHistoryForm />,
    },
    {
      label: 'Employment History',
      component: <EmploymentHistoryForm />,
    },
    {
      label: 'Travel History',
      component: <TravelHistoryForm />,
    },
    {
      label: 'Family Member',
      component: <FamilyMemberForm />,
    },
  ];

  return (
    <Grid container spacing={2}>
      <BasicTabs tabs={contents} />
    </Grid>
  );
};

const Applicant: React.FC = () => (
  <AppContainer title="Applicant" contents={<Contents />} />
);

export default Applicant;
