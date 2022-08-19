import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  TextField,
  CardActions,
  Autocomplete,
} from '@mui/material';

export const FamilyMemberForm = () => (
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
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id={'countriesOfCitizenship'}
            variant="outlined"
            label={'Countries of citizenship'}
            fullWidth
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          {/* <BasicDatePicker label="Date of birth" /> */}
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id={'relationshipToApplicant'}
            variant="outlined"
            label={'Relationship to applicant'}
            fullWidth
          />
        </Grid>
      </Grid>
    </CardContent>
    <CardActions />
  </Card>
);
