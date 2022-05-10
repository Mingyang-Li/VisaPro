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
import Autocomplete from '@mui/material/Autocomplete';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';

export const EducationHistoryForm: React.FC = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'institutionName'}
              variant="outlined"
              label={'Institution name'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'qualificationGained'}
              variant="outlined"
              label={'Qualification gained'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'city'}
              variant="outlined"
              label={'City'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'country'}
              variant="outlined"
              label={'Country'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <BasicDatePicker label="Start date" />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <BasicDatePicker label="End date" />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Is current institution"
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              id={'additionalInfo'}
              variant="outlined"
              label={'Additional info'}
              fullWidth
              multiline
              maxRows={4}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
