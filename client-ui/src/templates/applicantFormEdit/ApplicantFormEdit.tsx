import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, DialogActions } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PersonalInfoForm } from '../personalInfoForm/PersonalInfoForm';
import { EducationHistoryForm } from '../educationHistoryForm/EducationHistoryForm';
import { EmploymentHistoryForm } from '../employmentHistoryForm/EmploymentHistoryForm';
import { TravelHistoryForm } from '../travelHistoryForm/TravelHistoryForm';
import { FamilyMemberForm } from '../familyMemberForm/FamilyMemberForm';

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

interface IApplicantFormEdit {
  id?: string;
}

const ApplicantFormEdit: React.FC = (props: IApplicantFormEdit) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log('handleSubmit clicked');
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        maxWidth={'lg'}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle>Edit applicant</DialogTitle>
        <DialogContent>
          <BasicTabs />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ApplicantFormEdit;
