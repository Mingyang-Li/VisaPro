import React from 'react';
import {
  CardActions,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'; 
import DataTable from '../dataTable/DataTable';

export const EducationHistoryForm: React.FC = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <<DataTable />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
