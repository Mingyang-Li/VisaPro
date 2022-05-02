import React from 'react';
import { userInfo } from '../graphql/Store';
import { useQuery, useReactiveVar } from '@apollo/client';
import AppContainer from '../templates/appContainer/AppContainer';
import BasicCard from '../templates/card/Card';
import { Grid } from '@mui/material';
import ApplicantFormCreate from '../templates/applicantFormCreate/ApplicantFormCreate';
import { User } from '../generated/graphql';
import { GET_CURR_USER } from '../graphql/Queries';

const Contents: React.FC = () => {
  const info = useReactiveVar(userInfo);
  const username = info.username;
  console.log(username);
  const { data, loading, error } = useQuery(GET_CURR_USER, {
    variables: {
      username: username,
    },
  });

  console.table(data);
  return (
    <>
      <ApplicantFormCreate open={false} title={'New applicant'} />
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
    </>
  );
};

const Dashboard: React.FC = () => {
  // const userInfoDetails = useReactiveVar(userInfo);
  // const userDetails = useReactiveVar(user);
  // console.log(user);
  return (
    <>
      <AppContainer title="Dashboard" contents={<Contents />} />
    </>
  );
};

export default Dashboard;
