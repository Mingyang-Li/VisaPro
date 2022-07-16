import { Card, CardContent, Grid, TextField, CardActions } from '@mui/material';
import { BasicDatePicker } from '../dateTimePicker/DateTimePicker';

export const TravelHistoryForm = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={6} sm={6} xs={12}>
            <BasicDatePicker label="Date entered a destination" />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <BasicDatePicker label="Date departed" />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'destinationHub'}
              variant="outlined"
              label={'Destination airport'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'destinationCity'}
              variant="outlined"
              label={'Destination city'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'destinationCountry'}
              variant="outlined"
              label={'Destination country'}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id={'reasonOfTravel'}
              variant="outlined"
              label={'Reason of travel'}
              fullWidth
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
