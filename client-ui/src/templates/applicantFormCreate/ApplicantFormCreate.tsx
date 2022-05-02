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
  title?: string;
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

  const enableCreation =
    values.firstName === '' ||
    values.lastName === '' ||
    values.email === '' ||
    values.disableInput;

  const handleSubmit = () => {
    setValues({ ...values, disableInput: true });
    // createPersonalInfo().then(createApplicant);
    createApplicant().then(() => {
      setTimeout(() => {
        handleClose();
      }, 700);
    });
  };

  const [createPersonalInfo, { loading }] = useMutation<Mutation>(
    CREATE_PERSONAL_INFO,
    {
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        createdBy: {
          id: u.id,
        },
      },
      update(proxy, result) {
        entityCreated(result?.data?.createPersonalInfo.id);
      },
    },
  );

  const personalInfoId = useReactiveVar(entityCreated);
  const [createApplicant, { data, error }] = useMutation<Mutation>(
    CREATE_APPLICANT,
    {
      variables: {
        // personalInfo: {
        //   id: personalInfoId,
        // },
        createdBy: {
          id: u.id,
        },
      },
      refetchQueries: [
        {
          query: GET_APPLICANTS_BY_USER,
          variables: {
            id: window.localStorage.getItem('userId'),
          },
        },
      ],
    },
  );
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
        <br></br>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                id="outlined-basic"
                label="First name"
                variant="outlined"
                value={values.firstName}
                onChange={(e) =>
                  setValues({ ...values, firstName: e.currentTarget.value })
                }
                fullWidth
                required
                disabled={values.disableInput}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                value={values.lastName}
                onChange={(e) =>
                  setValues({ ...values, lastName: e.currentTarget.value })
                }
                fullWidth
                required
                disabled={values.disableInput}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.currentTarget.value })
                }
                fullWidth
                required
                disabled={values.disableInput}
              />
            </Grid>
            <Grid item md={6}>
              <Button onClick={handleClose} variant="outlined" fullWidth>
                discard
              </Button>
            </Grid>
            <Grid item md={6}>
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
