import React, { useState, useEffect } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from '@emotion/styled';
import { blue } from '@mui/material/colors';
import {
  Alert,
  Card, CardContent, CircularProgress, Grid,
} from '@mui/material';
import { useMutation, useReactiveVar } from '@apollo/client';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';
import { EmploymentHistory, EmploymentHistoryCreateInput } from '../../generated/graphql';
import { CREATE_EMPLOYMENT_HISOTRY } from '../../graphql/Mutations';
import { EMPLOYMENT_HISTORIES } from '../../graphql/Queries';
import { applicantIdCurrEditing, user } from '../../graphql/Store';

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

const EmploymentHistoryCreate: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(true);
  const [formInfo, setFormInfo] = useState<EmploymentHistory>({
    id: '',
    startDate: new Date().toString(),
    endDate: new Date().toString(),
  });
  const applicantId = useReactiveVar(applicantIdCurrEditing);
  const currUser = useReactiveVar(user);

  const employmentHistoryCreateInput: EmploymentHistoryCreateInput = {
    jobTitle: formInfo?.jobTitle,
    companyName: formInfo?.companyName,
    duties: formInfo?.duties,
    employmentType: formInfo?.employmentType,
    startDate: formInfo?.startDate,
    endDate: formInfo?.endDate,
    cityOfWork: formInfo?.cityOfWork,
    countryOfWork: formInfo?.countryOfWork,
    additionalInfo: formInfo?.additionalInfo,
    createdBy: {
      id: currUser.id,
    },
    updatedBy: {
      id: currUser.id,
    },
    applicant: {
      id: applicantId,
    },
    archived: false,
  };

  const [createEmploymentHistory, { data: dataCreated, loading: creating, error: creationError }] = useMutation(
    CREATE_EMPLOYMENT_HISOTRY,
    {
      variables: {
        data: employmentHistoryCreateInput,
      },
      refetchQueries: [
        {
          query: EMPLOYMENT_HISTORIES,
          variables: {
            where: {
              createdBy: {
                id: currUser.id,
              },
              applicant: {
                id: applicantId,
              },
              archived: {
                equals: false,
              },
            },
          },
        },
      ],
    },
  );

  useEffect(() => {
    if (creating) {
      setEdit(() => false);
    } else if (dataCreated?.createEducationHistory) {
      setOpen(() => false);
    } else {
      setEdit(() => true);
    }
  }, [creating, dataCreated, creationError]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFormInfo({ id: '' });
    setOpen(false);
  };

  return (
    <div>
      <ColorButton
        variant="contained"
        onClick={handleClickOpen}
        style={{ textTransform: 'none' }}
      >
        Create Employment History
      </ColorButton>

      <Dialog open={open}>
        <DialogTitle>Create Employment History</DialogTitle>
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
                <Grid item md={12} sm={12} xs={12}>
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
                <Grid item md={12} sm={12} xs={12}>
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
                  <BasicDatePicker
                    label={'Start date'}
                    disabled={!edit}
                    defaultValue={new Date(formInfo?.startDate ?? '') as Date}
                    updateParentDateValue={(d: Date) => setFormInfo({ ...formInfo, startDate: d })}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <BasicDatePicker
                    label={'End date'}
                    disabled={!edit}
                    defaultValue={new Date(formInfo?.endDate ?? '') as Date}
                    updateParentDateValue={(d: Date) => setFormInfo({ ...formInfo, endDate: d })}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    id="duties"
                    fullWidth
                    label="Duties"
                    multiline
                    rows={3}
                    disabled={!edit}
                    variant={!edit ? 'filled' : 'outlined'}
                    value={formInfo?.duties}
                    onChange={(e: any) => setFormInfo({ ...formInfo, duties: e.target.value })}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    id="additionalInfo"
                    fullWidth
                    label="Additional Info"
                    multiline
                    rows={4}
                    disabled={!edit}
                    variant={!edit ? 'filled' : 'outlined'}
                    value={formInfo?.additionalInfo}
                    onChange={(e: any) => setFormInfo({ ...formInfo, additionalInfo: e.target.value })}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  {creationError ? (
                    <Alert severity="error">
                      Error creating education history, please try again later
                    </Alert>
                  ) : null}
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  {dataCreated?.createEducationHistory ? (
                    <Alert severity="success">
                      Education history created!
                    </Alert>
                  ) : null}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ textTransform: 'none' }}
          >
            Discard
          </Button>
          <Button
            onClick={() => createEmploymentHistory}
            variant={'contained'}
            disabled={!edit}
            style={{ textTransform: 'none' }}
          >
            {creating ? (
              <CircularProgress color="warning" />
            ) : (
              'Create'
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmploymentHistoryCreate;
