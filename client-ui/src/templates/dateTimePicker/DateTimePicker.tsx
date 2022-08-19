/* eslint-disable no-unused-vars */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface IDatePicker {
  label?: string;
  value?: Date;
  disabled?: boolean;
  defaultValue?: Date;
  updateParentDateValue: (d: Date) => void;
}

export const BasicDatePicker: React.FC<IDatePicker> = (props: IDatePicker) => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat="yyyy/MM/dd"
        label={props.label ?? 'Date'}
        value={props.defaultValue ?? value}
        onChange={(newValue) => {
          setValue(newValue);
          props.updateParentDateValue(newValue as Date);
        }}
        renderInput={(params) => <TextField {...params} fullWidth />}
        disabled={props.disabled ?? false}
      />
    </LocalizationProvider>
  );
};
