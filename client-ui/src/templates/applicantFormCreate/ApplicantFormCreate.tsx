import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, TextField, Grid } from '@mui/material';

interface IApplicantFormCreate {
  open: boolean;
  title?: string;
}

const ApplicantFormCreate: React.FC<IApplicantFormCreate> = (
  props: IApplicantFormCreate,
) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{props.title}</DialogTitle>
        <br></br>
        <DialogContent>
          <Grid container spacing={2}>
            {/* row 1 */}
            <Grid item md={6}>
              <TextField
                id="outlined-basic"
                label="First name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button>jsdg</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ApplicantFormCreate;
