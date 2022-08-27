/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLazyQuery, useMutation, useReactiveVar } from '@apollo/client';
import {
  Alert,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { EMPLOYMENT_HISTORIES, EMPLOYMENT_HISTORY } from '../../graphql/Queries';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';
import {
  EmploymentHistoryUpdateInput, EmploymentHistoryWhereUniqueInput, EmploymentHistory, EmploymentHistoryWhereInput, Mutation, Query,
} from '../../generated/graphql';
import { UPDATE_EMOLOYMENT_HISTORY } from '../../graphql/Mutations';
import { applicantIdCurrEditing } from '../../graphql/Store';
import { numDatesBetweenTwoDates } from '../../services/helper.service';

interface IEmploymentHistoryEdit {
  open: boolean;
  employmentHistoryId: string;
  handleClose: (value: boolean) => void;
}

const EmploymentHistoryEdit: React.FC<IEmploymentHistoryEdit> = (props: IEmploymentHistoryEdit) => {
  const applicantId = useReactiveVar(applicantIdCurrEditing);
  const [edit, setEdit] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [getData, { data, loading, error }] = useLazyQuery<Query>(EMPLOYMENT_HISTORY, {
    variables: {
      where: {
        id: props.employmentHistoryId,
      },
    },
  });

  useEffect(() => {
    if (props.open || props.employmentHistoryId) getData();
  }, [props.open, props.employmentHistoryId]);

  const [formInfo, setFormInfo] = useState<EmploymentHistory>(data?.employmentHistory as EmploymentHistory);

  useEffect(() => {
    setFormInfo(data?.employmentHistory as EmploymentHistory);
  }, [data]);

  const employmentHistoryUpdateInput: EmploymentHistoryUpdateInput = {
    jobTitle: formInfo?.jobTitle,
    companyName: formInfo?.companyName,
    duties: formInfo?.duties,
    employmentType: formInfo?.employmentType,
    startDate: formInfo?.startDate,
    endDate: formInfo?.endDate,
    cityOfWork: formInfo?.cityOfWork,
    countryOfWork: formInfo?.countryOfWork,
    additionalInfo: formInfo?.additionalInfo,
  };

  const employmentHistoryWhereUniqueInput: EmploymentHistoryWhereUniqueInput = {
    id: props.employmentHistoryId,
  };

  const employmentHistoryWhereInput: EmploymentHistoryWhereInput = {
    applicant: {
      id: applicantId,
    },
    archived: {
      equals: false,
    },
  };

  const [
    initiateUpdate,
    { data: updatedData, loading: updating, error: updateError },
  ] = useMutation<Mutation>(
    UPDATE_EMOLOYMENT_HISTORY,
    {
      variables: {
        where: employmentHistoryWhereUniqueInput,
        data: employmentHistoryUpdateInput,
      },
      refetchQueries: [
        {
          query: EMPLOYMENT_HISTORIES,
          variables: {
            where: employmentHistoryWhereInput,
          },
        },
        {
          query: EMPLOYMENT_HISTORY,
          variables: {
            where: employmentHistoryWhereUniqueInput,
          },
        },
      ],
    },
  );

  useEffect(() => {
    if (updating || loading) {
      setEdit(() => false);
    } else {
      setEdit(() => true);
    }
  }, [updating, loading]);

  useEffect(() => {
    if (updatedData || updateError) setShowAlert(() => true);
  }, [updatedData, updateError]);

  useEffect(() => {
    if (edit) setShowAlert(() => false);
  }, [edit]);

  return (
    <Dialog open={props.open} maxWidth="md">
      {loading ? (
        <DialogContent>
          <LoadingSpinner show text={'Getting more details about your education'} />
        </DialogContent>
      ) : (
        <>
          <DialogTitle>Edit Employment History</DialogTitle>
          <DialogContent>
            <Card variant="outlined">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      id="jobTitle"
                      fullWidth
                      label="Job title"
                      disabled={!edit}
                      variant={!edit ? 'filled' : 'outlined'}
                      value={formInfo?.jobTitle}
                      onChange={(e: any) => setFormInfo({ ...formInfo, jobTitle: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={7} sm={12} xs={12}>
                    <TextField
                      id="companyName"
                      fullWidth
                      label="Company name"
                      disabled={!edit}
                      variant={!edit ? 'filled' : 'outlined'}
                      value={formInfo?.companyName}
                      onChange={(e: any) => setFormInfo({ ...formInfo, companyName: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={5} sm={12} xs={12}>
                    <TextField
                      id="employmentType"
                      fullWidth
                      label="Employment type"
                      disabled={!edit}
                      variant={!edit ? 'filled' : 'outlined'}
                      value={formInfo?.employmentType}
                      onChange={(e: any) => setFormInfo({ ...formInfo, employmentType: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <BasicDatePicker
                      label={'Start date'}
                      disabled={!edit}
                      defaultValue={new Date(formInfo?.startDate) as Date}
                      updateParentDateValue={(d: Date) => setFormInfo({ ...formInfo, startDate: d })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <BasicDatePicker
                      label={'End date'}
                      disabled={!edit}
                      defaultValue={new Date(formInfo?.endDate) as Date}
                      updateParentDateValue={(d: Date) => setFormInfo({ ...formInfo, endDate: d })}
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      id="duration"
                      fullWidth
                      label="I've been on this role for: "
                      disabled
                      variant={'filled'}
                      value={`${numDatesBetweenTwoDates(new Date(formInfo?.startDate), new Date(formInfo?.endDate))} days`}
                      onChange={(e: any) => setFormInfo({ ...formInfo, cityOfWork: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      id="cityOfWork"
                      fullWidth
                      label="City of work"
                      disabled={!edit}
                      variant={!edit ? 'filled' : 'outlined'}
                      value={formInfo?.cityOfWork}
                      onChange={(e: any) => setFormInfo({ ...formInfo, cityOfWork: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      id="countryOfWork"
                      fullWidth
                      label="Country of work"
                      disabled={!edit}
                      variant={!edit ? 'filled' : 'outlined'}
                      value={formInfo?.countryOfWork}
                      onChange={(e: any) => setFormInfo({ ...formInfo, countryOfWork: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      id="duties"
                      fullWidth
                      label="Duties"
                      multiline
                      rows={2}
                      disabled={!edit}
                      variant={!edit ? 'filled' : 'outlined'}
                      value={formInfo?.duties}
                      onChange={(e: any) => setFormInfo({ ...formInfo, duties: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      id="createdAt"
                      fullWidth
                      disabled
                      label="Created At"
                      variant="filled"
                      value={formInfo?.createdAt}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      id="updatedAt"
                      fullWidth
                      disabled
                      label="Updated At"
                      variant="filled"
                      value={formInfo?.updatedAt}
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      id="additionalInfo"
                      fullWidth
                      multiline
                      rows={4}
                      label="Additional Info"
                      disabled={!edit}
                      variant={!edit ? 'filled' : 'outlined'}
                      value={formInfo?.additionalInfo}
                      onChange={(e: any) => setFormInfo({ ...formInfo, additionalInfo: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    {error ? (
                      <Alert severity="error">
                        Error loading your education history, please try again later!
                      </Alert>
                    ) : null}
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    {updateError ? (
                      <Alert severity="error">
                        Error updating education history
                      </Alert>
                    ) : null}
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    {updatedData ? (
                      <Alert severity="success">
                        Education history updated!
                      </Alert>
                    ) : null}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Grid container spacing={1}>
              <Grid item md={6} sm={12} xs={12}>
                <Button
                  fullWidth
                  onClick={(event) => props.handleClose(!open)}
                  color={'error'}
                  variant={'contained'}
                  disabled={!edit}
                  style={{ textTransform: 'none' }}
                >
                  close
                </Button>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Button
                  fullWidth
                  onClick={() => initiateUpdate()}
                  color={'primary'}
                  variant={'contained'}
                  disabled={!edit}
                  style={{ textTransform: 'none' }}
                >
                  {updating ? (
                    <CircularProgress color="warning" />
                  ) : (
                    'Update'
                  )}
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default EmploymentHistoryEdit;
