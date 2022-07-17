import React, { useState } from 'react';
import { Button, CardActions, Grid, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Autocomplete from '@mui/material/Autocomplete';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';
import { useQuery, useReactiveVar } from '@apollo/client';
import { applicantIdCurrEditing } from '../../graphql/Store';
import { PersonalInfo, Query } from '../../generated/graphql';
import { PERSONAL_INFO_BY_APPLICANT_ID } from '../../graphql/Queries';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { countryList } from '../../utils/countries';
import { useParams } from 'react-router-dom';

export const PersonalInfoForm: React.FC = () => {
  const { id } = useParams();
  const [formInfo, setFormInfo] = useState<PersonalInfo>({ id: id || '' });
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

  return (
    <Card variant="outlined">
      <CardContent>
        <LoadingSpinner show={loading} />
        <Grid container spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'firstName'}
              label={'First name'}
              defaultValue={personalInfo?.firstName}
              onChange={(e: any) =>
                setFormInfo({ ...formInfo, firstName: e.currentTarget.value })
              }
              fullWidth
              disabled={!edit}
              variant={!edit ? 'filled' : 'outlined'}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'lastName'}
              label={'Last name'}
              defaultValue={personalInfo?.lastName}
              onChange={(e: any) =>
                setFormInfo({ ...formInfo, lastName: e.currentTarget.value })
              }
              fullWidth
              disabled={!edit}
              variant={!edit ? 'filled' : 'outlined'}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'email'}
              label={'Email'}
              defaultValue={personalInfo?.email}
              onChange={(e: any) =>
                setFormInfo({ ...formInfo, email: e.currentTarget.value })
              }
              fullWidth
              disabled={!edit}
              variant={!edit ? 'filled' : 'outlined'}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'mobile'}
              label={'Mobile'}
              defaultValue={personalInfo?.mobile}
              onChange={(e: any) =>
                setFormInfo({ ...formInfo, mobile: e.currentTarget.value })
              }
              fullWidth
              disabled={!edit}
              variant={!edit ? 'filled' : 'outlined'}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'nzAddress'}
              label={'NZ address'}
              defaultValue={personalInfo?.nzAddress}
              onChange={(e: any) =>
                setFormInfo({ ...formInfo, nzAddress: e.currentTarget.value })
              }
              fullWidth
              disabled={!edit}
              variant={!edit ? 'filled' : 'outlined'}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'homeCountryAddress'}
              label={'Home Country Address'}
              defaultValue={personalInfo?.homeCountryAddress}
              onChange={(e: any) =>
                setFormInfo({
                  ...formInfo,
                  homeCountryAddress: e.currentTarget.value,
                })
              }
              fullWidth
              disabled={!edit}
              variant={!edit ? 'filled' : 'outlined'}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'inzClientNumber'}
              label={'Immigration NZ Client number'}
              defaultValue={personalInfo?.inzClientNumber}
              onChange={(e: any) =>
                setFormInfo({
                  ...formInfo,
                  inzClientNumber: e.currentTarget.value,
                })
              }
              fullWidth
              disabled={!edit}
              variant={!edit ? 'filled' : 'outlined'}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'passportNumber'}
              label={'Passport number'}
              defaultValue={personalInfo?.passportNumber}
              onChange={(e: any) =>
                setFormInfo({
                  ...formInfo,
                  passportNumber: e.currentTarget.value,
                })
              }
              fullWidth
              disabled={!edit}
              variant={!edit ? 'filled' : 'outlined'}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={countryList.map((c) => c)}
              sx={{ width: 300 }}
              disabled={!edit}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Countries of citizenship"
                  fullWidth
                  variant={!edit ? 'filled' : 'outlined'}
                />
              )}
            />
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            <BasicDatePicker label="Date of birth" disabled={!edit} />
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            <Autocomplete
              disablePortal
              disabled={!edit}
              id="combo-box-demo"
              options={countryList.map((c) => c)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country of birth"
                  fullWidth
                  variant={!edit ? 'filled' : 'outlined'}
                />
              )}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <Button
              variant={edit ? 'contained' : 'outlined'}
              fullWidth
              onClick={() => setEdit(!edit)}
              color={edit ? 'error' : 'primary'}
            >
              {edit ? 'Discard' : 'Edit'}
            </Button>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Button
              // onClick={handleSubmit}
              disabled={!edit}
              variant="contained"
              fullWidth
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
