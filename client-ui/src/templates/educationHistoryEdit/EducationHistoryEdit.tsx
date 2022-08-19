/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import {
  Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField,
} from '@mui/material';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { EDUCATION_HISTORY } from '../../graphql/Queries';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';
import { EducationHistory, Query } from '../../generated/graphql';

interface IEducationHistoryEdit {
  open: boolean;
  educationHistoryId: string;
  handleClose: (value: boolean) => void;
}
// id = cl6zvte3820725ku243x8hva2
const EducationHistoryEdit: React.FC<IEducationHistoryEdit> = (props: IEducationHistoryEdit) => {
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

  if (error) return <h1>An error occured</h1>;
  return (
    <Dialog open={props.open}>
      {loading ? (
        <DialogContent>
          <LoadingSpinner show text={'Getting more details about your education'} />
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
                      value={data?.educationHistory?.institutionName}
                      onChange={(e: any) => setFormInfo({ ...formInfo, institutionName: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      id="country"
                      fullWidth
                      label="Country"
                      variant="outlined"
                      value={data?.educationHistory?.country}
                      onChange={(e: any) => setFormInfo({ ...formInfo, country: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      id="city"
                      fullWidth
                      label="City"
                      variant="outlined"
                      value={data?.educationHistory?.city}
                      onChange={(e: any) => setFormInfo({ ...formInfo, city: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      id="qualificationGained"
                      fullWidth
                      label="Qualification Gained"
                      variant="outlined"
                      value={data?.educationHistory?.qualificationGained}
                      onChange={(e: any) => setFormInfo({ ...formInfo, qualificationGained: e.target.value })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <BasicDatePicker
                      label={'Start date'}
                      defaultValue={new Date(formInfo?.startDate)}
                      updateParentDateValue={(d: Date) => setFormInfo({ ...formInfo, startDate: d })}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <BasicDatePicker
                      label={'End date'}
                      defaultValue={new Date(formInfo?.endDate)}
                      updateParentDateValue={(d: Date) => setFormInfo({ ...formInfo, endDate: d })}
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField id="isCurrentInstitution" fullWidth disabled label="Is current institution" variant="filled" value={'No'} />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      id="Created At"
                      fullWidth
                      disabled
                      label="createdAt"
                      variant="filled"
                      value={formInfo?.createdAt}
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      id="Updated At"
                      fullWidth
                      disabled
                      label="updatedAt"
                      variant="filled"
                      value={formInfo?.updatedAt}
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      id="Additional Info"
                      fullWidth
                      multiline
                      rows={4}
                      label="additionalInfo"
                      variant="outlined"
                      value={data?.educationHistory?.additionalInfo}
                      onChange={(e: any) => setFormInfo({ ...formInfo, additionalInfo: e.target.value })}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={(event) => props.handleClose(!open)}>
              Cancel
            </Button>
            {/* <Button>Update</Button> */}
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default EducationHistoryEdit;
