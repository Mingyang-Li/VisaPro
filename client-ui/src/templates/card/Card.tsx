import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Maybe } from '../../generated/graphql';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

interface IBasicCard {
  fullName?: Maybe<string>;
  email?: string;
  educationHistoriesCt?: number;
  employmentHistoriesCt?: number;
  travelHistoriesCt?: number;
  familyMembersCt?: number;
}

export default function BasicCard(props: IBasicCard) {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.email ? props.email : 'Email:'}
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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
