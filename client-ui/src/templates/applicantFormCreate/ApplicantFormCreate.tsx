import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, TextField, Grid } from '@mui/material';
import { useMutation, useReactiveVar } from '@apollo/client';
import {
  CREATE_PERSONAL_INFO,
  CREATE_APPLICANT,
} from '../../graphql/Mutations';
import { GET_APPLICANTS_BY_USER } from '../../graphql/Queries';
import { Mutation } from '../../generated/graphql';
import { entityCreated, user } from '../../graphql/Store';

interface IApplicantFormCreate {
  open: boolean;
  title: string;
}

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  disableInput: boolean;
}

const ApplicantFormCreate: React.FC<IApplicantFormCreate> = (
  props: IApplicantFormCreate,
) => {
  const u = useReactiveVar(user);
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<IValues>({
    firstName: '',
    lastName: '',
    email: '',
    disableInput: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      disableInput: false,
    });
    setOpen(false);
  };

  const enableCreation = values.firstName === ''
    || values.lastName === ''
    || values.email === ''
    || values.disableInput;

  const applicantId = useReactiveVar(entityCreated);

  const [createApplicant] = useMutation<Mutation>(CREATE_APPLICANT, {
    variables: {
      data: {
        createdBy: {
          id: u.id,
        },
        archived: false,
      },
    },
    update(proxy, result) {
      entityCreated(result?.data?.createApplicant.id);
    },
  });

  const [createPersonalInfo] = useMutation<Mutation>(
    CREATE_PERSONAL_INFO,
    {
      variables: {
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          createdBy: {
            id: u.id,
          },
          applicant: {
            id: applicantId,
          },
        },
      },
      refetchQueries: [
        {
          query: GET_APPLICANTS_BY_USER,
          variables: {
            where: {
              createdBy: { id: sessionStorage.getItem('userId') },
              archived: { equals: null },
            },
          },
        },
      ],
    },
  );

  // fire createPersonalInfo then fire createApplicant using ID of PersonalInfo created
  const handleSubmit = () => {
    setValues({ ...values, disableInput: true });
    createApplicant().then(() => {
      createPersonalInfo().then(() => {
        setTimeout(() => {
          handleClose();
        }, 700);
      });
    });
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{props.title}</DialogTitle>
        <br />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                id="firstName"
                label="First name"
                variant="outlined"
                value={values.firstName}
                onChange={(e) => setValues({ ...values, firstName: e.currentTarget.value })}
                fullWidth
                required
                disabled={values.disableInput}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                id="lastName"
                label="Last name"
                variant="outlined"
                value={values.lastName}
                onChange={(e) => setValues({ ...values, lastName: e.currentTarget.value })}
                fullWidth
                required
                disabled={values.disableInput}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.currentTarget.value })}
                fullWidth
                required
                disabled={values.disableInput}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Button onClick={handleClose} variant="outlined" fullWidth>
                discard
              </Button>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Button
                onClick={handleSubmit}
                disabled={enableCreation}
                variant="contained"
                fullWidth
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplicantFormCreate;
