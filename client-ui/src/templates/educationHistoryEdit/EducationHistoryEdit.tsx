/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLazyQuery, useMutation, useReactiveVar } from '@apollo/client';
import {
  Autocomplete,
  Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField,
} from '@mui/material';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { EDUCATION_HISTORIES, EDUCATION_HISTORY } from '../../graphql/Queries';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';
import { EducationHistory, Mutation, Query } from '../../generated/graphql';
import { UPDATE_EDUCATION_HISTORY } from '../../graphql/Mutations';
import { applicantIdCurrEditing } from '../../graphql/Store';

interface IEducationHistoryEdit {
  open: boolean;
  educationHistoryId: string;
  handleClose: (value: boolean) => void;
}

const EducationHistoryEdit: React.FC<IEducationHistoryEdit> = (props: IEducationHistoryEdit) => {
  const applicantId = useReactiveVar(applicantIdCurrEditing);
  const [getData, { data, loading, error }] = useLazyQuery<Query>(EDUCATION_HISTORY, {
    variables: {
      where: {
        id: props.educationHistoryId,
      },
    },
  });

  useEffect(() => {
    if (props.open || props.educationHistoryId) getData();
  }, [props.open, props.educationHistoryId]);

  const [formInfo, setFormInfo] = useState<EducationHistory>(data?.educationHistory as EducationHistory);

  useEffect(() => {
    setFormInfo(data?.educationHistory as EducationHistory);
  }, [data]);

  const [initiateUpdate, { loading: updating, error: updateError }] = useMutation<Mutation>(
    UPDATE_EDUCATION_HISTORY,
    {
      variables: {
        where: {
          id: props.educationHistoryId,
        },
        data: {
          institutionName: formInfo?.institutionName,
          country: formInfo?.country,
          city: formInfo?.city,
          qualificationGained: formInfo?.qualificationGained,
          startDate: formInfo?.startDate,
          endDate: formInfo?.endDate,
          isCurrentInstitution: formInfo?.isCurrentInstitution,
          additionalInfo: formInfo?.additionalInfo,
        },
      },
      refetchQueries: [
        {
          query: EDUCATION_HISTORIES,
          variables: {
            where: {
              applicant: {
                id: applicantId,
              },
              archived: {
                equals: false,
              },
            },
          },
        },
        {
          query: EDUCATION_HISTORY,
          variables: {
            where: {
              id: props.educationHistoryId,
            },
          },
        },
      ],
    },
  );

  if (error) return <h1>An error occured</h1>;
  return (
    <Dialog open={props.open}>
      {loading || updating ? (
        <DialogContent>
          <LoadingSpinner show text={loading ? 'Getting more details about your education' : 'Updating education history...'} />
        </DialogContent>
      ) : (
        <>
          <DialogTitle>Edit Education History</DialogTitle>
          <DialogContent>
            <Card variant="outlined">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      id="institutionName"
                      fullWidth
                      label="Institution Name"
                      variant="outlined"
                      value={formInfo?.institutionName}
                      onChange={(e: any) => setFormInfo({ ...formInfo, institutionName: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      id="country"
                      fullWidth
                      label="Country"
                      variant="outlined"
                      value={formInfo?.country}
                      onChange={(e: any) => setFormInfo({ ...formInfo, country: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      id="city"
                      fullWidth
                      label="City"
                      variant="outlined"
                      value={formInfo?.city}
                      onChange={(e: any) => setFormInfo({ ...formInfo, city: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      id="qualificationGained"
                      fullWidth
                      label="Qualification Gained"
                      variant="outlined"
                      value={formInfo?.qualificationGained}
                      onChange={(e: any) => setFormInfo({ ...formInfo, qualificationGained: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <BasicDatePicker
                      label={'Start date'}
                      defaultValue={new Date(formInfo?.startDate) as Date}
                      updateParentDateValue={(d: Date) => setFormInfo({ ...formInfo, startDate: d })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <BasicDatePicker
                      label={'End date'}
                      defaultValue={new Date(formInfo?.endDate) as Date}
                      updateParentDateValue={(d: Date) => setFormInfo({ ...formInfo, endDate: d })}
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <Autocomplete
                      id="isCurrentInstitution"
                      value={formInfo?.isCurrentInstitution ? 'Yes' : 'No'}
                      fullWidth
                      disablePortal
                      options={['Yes', 'No']}
                      onChange={(event: any, newValue: string | null) => {
                        setFormInfo({
                          ...formInfo,
                          isCurrentInstitution: newValue === 'Yes',
                        });
                      }}
                      renderInput={(params) => <TextField {...params} fullWidth label="Is current institution" />}
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
                      variant="outlined"
                      value={formInfo?.additionalInfo}
                      onChange={(e: any) => setFormInfo({ ...formInfo, additionalInfo: e.target.value })}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Grid container spacing={1}>
              <Grid item md={6} sm={12} xs={12}>
                <Button fullWidth onClick={(event) => props.handleClose(!open)} color={'error'} variant={'contained'}>
                  Discard
                </Button>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Button fullWidth onClick={() => initiateUpdate()} color={'primary'} variant={'contained'}>
                  Update
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default EducationHistoryEdit;
