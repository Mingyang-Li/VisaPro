/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import {
  Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField,
} from '@mui/material';
import React from 'react';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';

interface IEducationHistoryEdit {
  open: boolean;
  educationHistoryId: string;
  handleClose: (value: boolean) => void;
}
const EducationHistoryEdit: React.FC<IEducationHistoryEdit> = (props: IEducationHistoryEdit) => {
  const loading = false;
  if (loading) return <LoadingSpinner show text={'Getting more details about your education'} />;
  return (
    <Dialog open={props.open}>
      <DialogTitle>Edit Education History</DialogTitle>
      <DialogContent>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={12} sm={12} xs={12}>
                <TextField id="institutionName" fullWidth label="Institution Name" variant="outlined" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField id="country" fullWidth label="Country" variant="outlined" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField id="city" fullWidth label="City" variant="outlined" />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextField id="qualificationGained" fullWidth label="Qualification Gained" variant="outlined" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <BasicDatePicker label={'Start date'} updateParentDateValue={() => console.log('updateParentDateValue')} />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <BasicDatePicker label={'End date'} updateParentDateValue={() => console.log('updateParentDateValue')} />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField id="Created At" fullWidth disabled label="createdAt" variant="filled" />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField id="Updated At" fullWidth disabled label="updatedAt" variant="filled" />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextField id="Additional Info" fullWidth multiline rows={4} label="additionalInfo" variant="outlined" />
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
    </Dialog>
  );
};

export default EducationHistoryEdit;
