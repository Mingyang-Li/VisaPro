import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface IDatePicker {
  label?: string;
  value?: Date;
  disabled?: boolean;
}

export const BasicDatePicker: React.FC<IDatePicker> = (props: IDatePicker) => {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat="yyyy/MM/dd"
        label={props.label ?? 'Date'}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} fullWidth />}
        disabled={props.disabled ?? false}
      />
    </LocalizationProvider>
  );
};
