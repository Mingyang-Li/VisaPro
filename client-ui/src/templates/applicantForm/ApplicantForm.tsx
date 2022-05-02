import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

interface IApplicantForm {
  open: boolean;
  title?: string;
  mode?: 'create' | 'edit';
}

const ApplicantForm: React.FC<IApplicantForm> = (props: IApplicantForm) => {
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
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>jhsdfgvkjshdgikuh</DialogContentText>
        </DialogContent>
        <DialogActions>
          <button>jsdg</button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ApplicantForm;
