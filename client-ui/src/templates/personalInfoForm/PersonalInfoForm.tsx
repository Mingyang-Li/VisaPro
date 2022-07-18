import React, { useState, useEffect } from 'react';
import { Button, CardActions, Grid, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Autocomplete from '@mui/material/Autocomplete';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';
import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { applicantIdCurrEditing } from '../../graphql/Store';
import { Mutation, PersonalInfo, Query } from '../../generated/graphql';
import { PERSONAL_INFO_BY_APPLICANT_ID } from '../../graphql/Queries';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { countryList } from '../../utils/countries';
import { UPDATE_PERSONAL_INFO_BY_ID } from '../../graphql/Mutations';

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

  const [formInfo, setFormInfo] = useState<PersonalInfo>(
    data?.personalInfos[0] as PersonalInfo,
  );

  const [initiateMutation, { loading: updating }] = useMutation<Mutation>(
    UPDATE_PERSONAL_INFO_BY_ID,
    {
      variables: {
        id: formInfo.id,
        firstName: formInfo.firstName,
        lastName: formInfo.lastName,
        email: formInfo.email,
        mobile: formInfo.mobile,
        nzAddress: formInfo.nzAddress,
        homeCountryAddress: formInfo.homeCountryAddress,
        inzClientNumber: formInfo.inzClientNumber,
        passportNumber: formInfo.passportNumber,
        countriesOfCitizenship: formInfo.countriesOfCitizenship,
        countryOfBirth: formInfo.countryOfBirth,
        dateOfBirth: formInfo.dateOfBirth,
        updatedById: window.sessionStorage.getItem('userId'),
      },
      refetchQueries: [
        {
          query: PERSONAL_INFO_BY_APPLICANT_ID,
          variables: { applicantId },
        },
      ],
    },
  );

  useEffect(() => {
    console.log(formInfo);
  }, [formInfo]);

  const updateDateValue = (d: Date) => {
    setFormInfo({ ...formInfo, dateOfBirth: d });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <LoadingSpinner show={loading || updating} />
        <Grid container spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'firstName'}
              label={'First name'}
              defaultValue={formInfo?.firstName}
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
              defaultValue={formInfo?.lastName}
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
              defaultValue={formInfo?.email}
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
              defaultValue={formInfo?.mobile}
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
              defaultValue={formInfo?.nzAddress}
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
              defaultValue={formInfo?.homeCountryAddress}
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
              defaultValue={formInfo?.inzClientNumber}
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
              defaultValue={formInfo?.passportNumber}
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
          <Grid item md={4} sm={12} xs={12}>
            <Autocomplete
              id="countriesOfCitizenship"
              freeSolo
              disablePortal
              options={countryList.map((c) => c)}
              disabled={!edit}
              onChange={(event: any, newValue: string | null) => {
                setFormInfo({
                  ...formInfo,
                  countriesOfCitizenship: newValue,
                });
              }}
              onInputChange={(event, newInputValue) => {
                setFormInfo({
                  ...formInfo,
                  countriesOfCitizenship: newInputValue,
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country of citizenship"
                  fullWidth
                  variant={!edit ? 'filled' : 'outlined'}
                />
              )}
            />
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Autocomplete
              id="countryOfBirth"
              disablePortal
              disabled={!edit}
              options={countryList.map((c) => c)}
              onChange={(event: any, newValue: string | null) => {
                setFormInfo({
                  ...formInfo,
                  countryOfBirth: newValue,
                });
              }}
              onInputChange={(event, newInputValue) => {
                setFormInfo({
                  ...formInfo,
                  countryOfBirth: newInputValue,
                });
              }}
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
          <Grid item md={4} sm={12} xs={12}>
            <BasicDatePicker
              label="Date of birth"
              disabled={!edit}
              updateParentDateValue={updateDateValue}
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
              onClick={() => initiateMutation().then(() => setEdit(!edit))}
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
