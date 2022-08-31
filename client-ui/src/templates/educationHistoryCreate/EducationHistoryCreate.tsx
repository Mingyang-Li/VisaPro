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
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TypeOf } from 'zod';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';
import { EducationHistory, EducationHistoryCreateInput } from '../../generated/graphql';
import { CREATE_EDUCATION_HISTORY } from '../../graphql/Mutations';
import { EDUCATION_HISTORIES } from '../../graphql/Queries';
import { applicantIdCurrEditing, user } from '../../graphql/Store';
import { EducationHistoryCreateInputSchema } from '../../utils/zod.schemas';

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

type SchemaType = TypeOf<typeof EducationHistoryCreateInputSchema>;

const EducationHistoryCreate: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(true);
  const [formInfo, setFormInfo] = useState<EducationHistory>({
    id: '',
    startDate: new Date().toString(),
    endDate: new Date().toString(),
  });
  const applicantId = useReactiveVar(applicantIdCurrEditing);
  const currUser = useReactiveVar(user);

  const educationHistoryCreateInput: EducationHistoryCreateInput = {
    institutionName: formInfo?.institutionName,
    country: formInfo?.country,
    city: formInfo?.city,
    qualificationGained: formInfo?.qualificationGained,
    startDate: formInfo?.startDate,
    endDate: formInfo?.endDate,
    isCurrentInstitution: new Date(formInfo?.endDate).getTime() > new Date().getTime(),
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

  const [createEducationHistory, { data: dataCreated, loading: creating, error: creationError }] = useMutation(
    CREATE_EDUCATION_HISTORY,
    {
      variables: {
        data: educationHistoryCreateInput,
      },
      refetchQueries: [
        {
          query: EDUCATION_HISTORIES,
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

  const {
    register: schema,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<SchemaType>({
    resolver: zodResolver(EducationHistoryCreateInputSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<SchemaType> = () => createEducationHistory();

  const handleClose = () => {
    setFormInfo({ id: '' });
    setOpen(false);
    reset();
  };

  return (
    <div>
      <ColorButton
        variant="contained"
        onClick={handleClickOpen}
        style={{ textTransform: 'none' }}
      >
        Create Education History
      </ColorButton>

      <Dialog open={open}>
        <DialogTitle>Create Education History</DialogTitle>
        <DialogContent>
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={2}>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    id="institutionName"
                    fullWidth
                    label="Institution Name"
                    placeholder="E.g, University of Auckland, Dunedin Girls High School, etc"
                    disabled={!edit}
                    variant={!edit ? 'filled' : 'outlined'}
                    value={formInfo?.institutionName}
                    error={!!errors.institutionName}
                    helperText={
                      errors.institutionName ? errors.institutionName.message : ''
                    }
                    {...schema('institutionName')}
                    onChange={(e: any) => setFormInfo({ ...formInfo, institutionName: e.target.value })}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    id="country"
                    fullWidth
                    label="Country"
                    disabled={!edit}
                    variant={!edit ? 'filled' : 'outlined'}
                    value={formInfo?.country}
                    error={!!errors.country}
                    helperText={
                      errors.country ? errors.country.message : ''
                    }
                    {...schema('country')}
                    onChange={(e: any) => setFormInfo({ ...formInfo, country: e.target.value })}
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    id="city"
                    fullWidth
                    label="City"
                    disabled={!edit}
                    variant={!edit ? 'filled' : 'outlined'}
                    value={formInfo?.city}
                    error={!!errors.city}
                    helperText={
                      errors.city ? errors.city.message : ''
                    }
                    {...schema('city')}
                    onChange={(e: any) => setFormInfo({ ...formInfo, city: e.target.value })}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    id="qualificationGained"
                    fullWidth
                    label="Qualification Gained"
                    disabled={!edit}
                    variant={!edit ? 'filled' : 'outlined'}
                    value={formInfo?.qualificationGained}
                    error={!!errors.qualificationGained}
                    helperText={
                      errors.qualificationGained ? errors.qualificationGained.message : ''
                    }
                    {...schema('qualificationGained')}
                    onChange={(e: any) => setFormInfo({ ...formInfo, qualificationGained: e.target.value })}
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
            onClick={handleSubmit(onSubmitHandler)}
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

export default EducationHistoryCreate;
