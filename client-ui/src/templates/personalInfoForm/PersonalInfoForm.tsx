import React from 'react';
import { CardActions, Grid, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Autocomplete from '@mui/material/Autocomplete';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';

export const PersonalInfoForm: React.FC = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'firstName'}
              variant="outlined"
              label={'First name'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'lastName'}
              variant="outlined"
              label={'Last name'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'email'}
              variant="outlined"
              label={'Email'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'mobile'}
              variant="outlined"
              label={'Mobile'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'nzAddress'}
              variant="outlined"
              label={'NZ address'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'inzClientNumber'}
              variant="outlined"
              label={'Immigration NZ Client number'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'passportNumber'}
              variant="outlined"
              label={'Passport number'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'countriesOfCitizenship'}
              variant="outlined"
              label={'Countries of citizenship'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <BasicDatePicker label="Date of birth" />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[{ label: 'New Zealand' }]}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Country of birth" fullWidth />
              )}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
