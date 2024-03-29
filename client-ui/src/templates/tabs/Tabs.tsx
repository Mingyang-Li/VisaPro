import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography/';
import React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
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
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export interface ITab {
  label: string;
  component: React.ReactElement;
}

interface IBasicTabs {
  tabs: ITab[];
}

export const BasicTabs: React.FC<IBasicTabs> = (props: IBasicTabs) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          {props.tabs.map((t, i) => (
            <Tab
              label={t.label}
              {...a11yProps(i)}
              style={{ textTransform: 'none' }}
            />
          ))}
        </Tabs>
      </Box>
      {props.tabs.map((t, i) => (
        <TabPanel value={value} index={i}>
          {t.component}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabPanel;
