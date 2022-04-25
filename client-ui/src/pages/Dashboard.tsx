import React from 'react';
import { userInfo } from '../graphql/Store';
import { useReactiveVar } from '@apollo/client';
import AppContainer from '../templates/appContainer/AppContainer';
import BasicCard from '../templates/card/Card';
import { Grid } from '@mui/material';

const Contents: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={3}>
        <BasicCard />
      </Grid>
      <Grid item md={3}>
        <BasicCard />
      </Grid>
      <Grid item md={3}>
        <BasicCard />
      </Grid>
      <Grid item md={3}>
        <BasicCard />
      </Grid>
      <Grid item md={3}>
        <BasicCard />
      </Grid>
      <Grid item md={3}>
        <BasicCard />
      </Grid>
      <Grid item md={3}>
        <BasicCard />
      </Grid>
      <Grid item md={3}>
        <BasicCard />
      </Grid>
    </Grid>
  );
};

const Dashboard: React.FC = () => {
  const user = useReactiveVar(userInfo);
  console.log(user);
  return (
    <>
      {/* <h2>{JSON.stringify(user)}</h2> */}
      <AppContainer title="Dashboard" contents={<Contents />} />
    </>
  );
};

export default Dashboard;
