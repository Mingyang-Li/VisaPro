import { Box, Typography, Tabs, Tab } from '@mui/material';
import React from 'react';
import { EducationHistoryForm } from '../educationHistoryForm/EducationHistoryForm';
import { EmploymentHistoryForm } from '../employmentHistoryForm/EmploymentHistoryForm';
import { FamilyMemberForm } from '../familyMemberForm/FamilyMemberForm';
import { PersonalInfoForm } from '../personalInfoForm/PersonalInfoForm';
import { TravelHistoryForm } from '../travelHistoryForm/TravelHistoryForm';

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

export interface Tab {
  label: string;
  component: React.ReactElement;
}

export interface IBasicTabs {
  tabs: Tab[];
}

export const BasicTabs: React.FC<IBasicTabs> = (props: IBasicTabs) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <h1>Applicant ID: </h1>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          {props.tabs.map((t, i) => (
            <Tab label={t.label} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>
      {props.tabs.map((t, i) => (
        <TabPanel value={value} index={1}>
          {t.component}
        </TabPanel>
      ))}
    </Box>
  );
};
