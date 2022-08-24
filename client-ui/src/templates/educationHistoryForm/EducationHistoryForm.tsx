import React from 'react';
import {
  CardActions,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EducationHistoryTable from '../educationHistoryTable/EducationHistoryTable';
import EducationHistoryCreate from '../educationHistoryCreate/EducationHistoryCreate';

export const EducationHistoryForm: React.FC = () => (
  <Card variant="outlined">
    <CardContent>
      <EducationHistoryCreate />
      <br />
      <EducationHistoryTable />
    </CardContent>
    <CardActions />
  </Card>
);
