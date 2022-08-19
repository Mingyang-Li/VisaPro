/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';
import React from 'react';
import LoadingSpinner from '../../components/common/LoadingSpinner';

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
        Content
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
