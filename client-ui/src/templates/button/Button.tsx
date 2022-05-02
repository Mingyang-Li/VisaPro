import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface IButton {
  delete?: () => void;
}

interface IDeleteButton extends IButton {}

export const DeleteButton: React.FC = (props: IDeleteButton) => {
  return (
    <Tooltip title="Delete" onClick={props.delete}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
