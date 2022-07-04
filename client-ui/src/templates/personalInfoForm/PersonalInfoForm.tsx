import React, { useState } from 'react';
import { CardActions, Grid, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Autocomplete from '@mui/material/Autocomplete';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';
import { useQuery, useReactiveVar } from '@apollo/client';
import { applicantIdCurrEditing } from '../../graphql/Store';
import { Query } from '../../generated/graphql';
import { PERSONAL_INFO_BY_APPLICANT_ID } from '../../graphql/Queries';

export const PersonalInfoForm: React.FC = () => {
  const [edit, setEdit] = useState(false);
  const applicantId = useReactiveVar(applicantIdCurrEditing);
  const { data, loading, error } = useQuery<Query>(
    PERSONAL_INFO_BY_APPLICANT_ID,
    {
      variables: {
        applicantId,
      },
    },
  );
  const personalInfo = data?.personalInfos[0];
  console.log(personalInfo);
  // const applicant = userVar.applicants.filter((a) => a.id !== applicantId);

  // useEffect(() => {
  //   console.table(applicant);
  // }, [applicantId]);

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'firstName'}
              label={'First name'}
              value={personalInfo!.firstName}
              fullWidth
              disabled={!edit}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'lastName'}
              label={'Last name'}
              value={personalInfo!.lastName}
              fullWidth
              disabled={!edit}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'email'}
              variant="outlined"
              label={'Email'}
              value={personalInfo!.email}
              fullWidth
              disabled={!edit}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'mobile'}
              variant="outlined"
              label={'Mobile'}
              value={personalInfo!.modile}
              fullWidth
              disabled={!edit}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'nzAddress'}
              variant="outlined"
              label={'NZ address'}
              value={personalInfo!.nzAddress}
              fullWidth
              disabled={!edit}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'inzClientNumber'}
              variant="outlined"
              label={'Immigration NZ Client number'}
              value={personalInfo!.inzClientNumber}
              fullWidth
              disabled={!edit}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'passportNumber'}
              variant="outlined"
              label={'Passport number'}
              value={personalInfo!.passportNumber}
              fullWidth
              disabled={!edit}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'countriesOfCitizenship'}
              variant="outlined"
              label={'Countries of citizenship'}
              value={personalInfo!.countriesOfCitizenship}
              fullWidth
              disabled={!edit}
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
