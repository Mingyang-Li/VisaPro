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

export const EmploymentHistoryForm: React.FC = () => (
  <Card variant="outlined">
    <CardContent>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id={'jobTitle'}
            variant="outlined"
            label={'Job title'}
            fullWidth
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id={'companyName'}
            variant="outlined"
            label={'Company name'}
            fullWidth
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <TextField
            id={'duties'}
            variant="outlined"
            label={'Duties'}
            fullWidth
            multiline
            maxRows={4}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id={'cityOfWork'}
            variant="outlined"
            label={'City of work'}
            fullWidth
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id={'countryOfWork'}
            variant="outlined"
            label={'Country of work'}
            fullWidth
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id={'nzBusinessNumber'}
            variant="outlined"
            label={'NZ business number'}
            fullWidth
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          {/* <BasicDatePicker label="Start date" /> */}
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          {/* <BasicDatePicker label="End date" /> */}
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Is current job"
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
    <CardActions />
  </Card>
);
