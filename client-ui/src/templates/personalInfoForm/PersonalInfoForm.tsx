import React, { useState, useEffect } from 'react';
import {
  Alert,
  Backdrop,
  Button,
  CardActions,
  CircularProgress,
  Grid,
  TextField,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Autocomplete from '@mui/material/Autocomplete';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';
import { useMutation, useQuery, useReactiveVar } from '@apollo/client';
import { applicantIdCurrEditing, user as User } from '../../graphql/Store';
import { Mutation, PersonalInfo, Query } from '../../generated/graphql';
import { GET_APPLICANTS_BY_USER, PERSONAL_INFOS } from '../../graphql/Queries';
import { countryList } from '../../utils/countries';
import { UPDATE_PERSONAL_INFO } from '../../graphql/Mutations';

export const PersonalInfoForm: React.FC = () => {
  const [edit, setEdit] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const applicantId = useReactiveVar(applicantIdCurrEditing);
  const user = useReactiveVar(User);
  const { data, loading, error } = useQuery<Query>(PERSONAL_INFOS, {
    variables: {
      where: {
        applicant: {
          id: applicantId,
        },
      },
    },
  });

  const [formInfo, setFormInfo] = useState<PersonalInfo>(
    data?.personalInfos[0] as PersonalInfo,
  );

  const [
    initiateMutation,
    { data: updatedData, loading: updating, error: updateError },
  ] = useMutation<Mutation>(UPDATE_PERSONAL_INFO, {
    variables: {
      where: {
        id: formInfo?.id ?? '',
      },
      data: {
        firstName: formInfo?.firstName,
        lastName: formInfo?.lastName,
        email: formInfo?.email,
        mobile: formInfo?.mobile,
        nzAddress: formInfo?.nzAddress,
        homeCountryAddress: formInfo?.homeCountryAddress,
        inzClientNumber: formInfo?.inzClientNumber,
        passportNumber: formInfo?.passportNumber,
        countriesOfCitizenship: formInfo?.countriesOfCitizenship,
        countryOfBirth: formInfo?.countryOfBirth,
        dateOfBirth: formInfo?.dateOfBirth,
        updatedBy: {
          id: user.id,
        },
      },
    },
    refetchQueries: [
      {
        query: PERSONAL_INFOS,
        variables: {
          where: {
            applicant: {
              id: applicantId,
            },
          },
        },
      },
      {
        query: GET_APPLICANTS_BY_USER,
        variables: {
          where: {
            createdBy: { id: sessionStorage.getItem('userId') || '' },
            archived: { equals: null },
          },
        },
      },
    ],
  });

  useEffect(() => {
    setShowOverlay((showOverlay) => !showOverlay);
    setEdit(false);
  }, [updating]);

  useEffect(() => {
    if (updatedData) {
      setShowAlert(true);
    }
  }, [updatedData]);

  useEffect(() => {
    if (edit) {
      setShowAlert(false);
    }
  }, [edit]);

  useEffect(() => {
    setShowAlert(true);
  }, [updateError]);

  const updateDateValue = (d: Date) => {
    setFormInfo({ ...formInfo, dateOfBirth: d });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={showOverlay}
        >
          <CircularProgress color="inherit" />
          {updating ? 'Updating' : ''}
          {loading ? 'Loading' : ''}
        </Backdrop>
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
              defaultValue={formInfo?.countriesOfCitizenship}
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
              defaultValue={formInfo?.countryOfBirth}
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
              defaultValue={new Date(formInfo?.dateOfBirth) as Date}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id="createdAt"
              label="Created at"
              variant="filled"
              disabled
              fullWidth
              value={new Date(formInfo?.createdAt).toUTCString()}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id="updatedAt"
              label="Updated at"
              variant="filled"
              disabled
              fullWidth
              value={new Date(formInfo?.updatedAt).toUTCString()}
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
              onClick={() => initiateMutation()}
              disabled={!edit}
              variant="contained"
              fullWidth
            >
              Save
            </Button>
          </Grid>
          {showAlert ? (
            <Grid item md={12} sm={12} xs={12}>
              {updateError ? (
                <Alert severity="error">
                  Failed to update personal information, please try again later
                </Alert>
              ) : (
                <Alert severity="success">Personal Infomation updated</Alert>
              )}
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
};
