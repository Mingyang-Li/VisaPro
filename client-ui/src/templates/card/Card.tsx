import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Maybe } from '../../generated/graphql';

interface IBasicCard {
  id?: string;
  updatedAt?: string;
  fullName?: Maybe<string>;
  email?: Maybe<string>;
  educationHistoriesCt?: number;
  employmentHistoriesCt?: number;
  travelHistoriesCt?: number;
  familyMembersCt?: number;
  onEditRequest?: () => void;
}

const BasicCard: React.FC<IBasicCard> = (props: IBasicCard) => (
  <Card variant="outlined">
    <CardContent>
      <p>Updated at: {props.updatedAt}</p>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.email ? `Email: ${props.email}` : 'Email:'}
      </Typography>
      <Typography variant="h5" component="div">
        {props.fullName ? props.fullName : 'Name'}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
        Education Histories:{' '}
        {props.educationHistoriesCt ? props.educationHistoriesCt : '0'}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
        Employment Histories:{' '}
        {props.employmentHistoriesCt ? props.employmentHistoriesCt : '0'}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
        Travel Histories:{' '}
        {props.travelHistoriesCt ? props.travelHistoriesCt : '0'}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
        Family Members: {props.familyMembersCt ? props.familyMembersCt : '0'}
      </Typography>
    </CardContent>
    <Divider />
    <CardActions>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Button fullWidth variant={'outlined'} color={'error'}>
            Archive
          </Button>
        </Grid>
        <Grid item md={6}>
          <Button fullWidth onClick={props.onEditRequest} variant={'contained'}>
            Edit
          </Button>
        </Grid>
      </Grid>
    </CardActions>
  </Card>
);

export default BasicCard;
