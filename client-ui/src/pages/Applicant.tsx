import React, { useCallback } from 'react';
import { user, applicantIdCurrEditing, userInfo } from '../graphql/Store';
import { useQuery, useReactiveVar } from '@apollo/client';
import AppContainer from '../templates/appContainer/AppContainer';
import BasicCard from '../templates/card/Card';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import ApplicantFormCreate from '../templates/applicantFormCreate/ApplicantFormCreate';
import { Query } from '../generated/graphql';
import { GET_APPLICANTS_BY_USER, GET_CURR_USER } from '../graphql/Queries';
import { EducationHistoryForm } from '../templates/educationHistoryForm/EducationHistoryForm';
import { EmploymentHistoryForm } from '../templates/employmentHistoryForm/EmploymentHistoryForm';
import { FamilyMemberForm } from '../templates/familyMemberForm/FamilyMemberForm';
import { PersonalInfoForm } from '../templates/personalInfoForm/PersonalInfoForm';
import { TravelHistoryForm } from '../templates/travelHistoryForm/TravelHistoryForm';

export const UpdatingCurrUser: React.FC = () => {
  const info = useReactiveVar(userInfo);
  const username = info.username;
  const { data } = useQuery<Query>(GET_CURR_USER, {
    variables: {
      username: username,
    },
  });

  const currUser = useReactiveVar(user);
  if (data) {
    currUser.id = data?.users[0].id;
    currUser.username = data?.users[0].username;
    currUser.firstName = data?.users[0].firstName;
    currUser.lastName = data?.users[0].lastName;
    user(currUser);
    window.localStorage.setItem('userId', currUser.id);
  }
  return <></>;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Personal Info" {...a11yProps(0)} />
          <Tab label="Education History" {...a11yProps(1)} />
          <Tab label="Employment History" {...a11yProps(2)} />
          <Tab label="Travel History" {...a11yProps(3)} />
          <Tab label="Family Members" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PersonalInfoForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EducationHistoryForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EmploymentHistoryForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TravelHistoryForm />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FamilyMemberForm />
      </TabPanel>
    </Box>
  );
}

const Contents: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <BasicTabs />
    </Grid>
  );
};

const Applicant: React.FC = () => (
  <AppContainer title="Applicant" contents={<Contents />} />
);

export default Applicant;
