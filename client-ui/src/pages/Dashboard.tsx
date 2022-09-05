import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/client';
import { Grid, CircularProgress, Backdrop } from '@mui/material';
import { user, applicantIdCurrEditing, userInfo } from '../graphql/Store';
import AppContainer from '../templates/appContainer/AppContainer';
import BasicCard from '../templates/card/Card';
import ApplicantFormCreate from '../templates/applicantFormCreate/ApplicantFormCreate';
import { Query } from '../generated/graphql';
import { GET_APPLICANTS_BY_USER, GET_CURR_USER } from '../graphql/Queries';

const UpdatingCurrUser: React.FC = () => {
  const info = useReactiveVar(userInfo);
  const { username } = info;
  const { data } = useQuery<Query>(GET_CURR_USER, {
    variables: {
      username,
    },
  });

  const currUser = useReactiveVar(user);
  if (data) {
    currUser.id = data?.users[0].id;
    currUser.username = data?.users[0].username;
    currUser.firstName = data?.users[0].firstName;
    currUser.lastName = data?.users[0].lastName;
    user(currUser);
    sessionStorage.setItem('userId', currUser.id);
  }
  return null;
};

const Contents: React.FC = () => {
  const currUser = useReactiveVar(user);
  const { data, loading } = useQuery<Query>(GET_APPLICANTS_BY_USER, {
    variables: {
      where: {
        createdBy: { id: currUser.id || '' },
        archived: { equals: false },
      },
    },
  });

  const navigate = useNavigate();
  const onEditRequest = (id: string) => {
    applicantIdCurrEditing(id);
    navigate(`/applicants/${id}`);
  };

  return (
    <>
      <UpdatingCurrUser />
      <ApplicantFormCreate open={false} title="New applicant" />
      <h1>Welcome {currUser?.username}</h1>
      <Grid container spacing={2}>
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme: any) => theme.zIndex.drawer + 1,
          }}
          open={loading}
        >
          <CircularProgress color="inherit" />
          {loading ? 'Loading' : ''}
        </Backdrop>
        {data?.applicants.map((a) => (
          <Grid item lg={3} md={4} xs={12} key={a.id}>
            <BasicCard
              key={a.id}
              updatedAt={a.updatedAt}
              fullName={`${a.personalInfo?.firstName} ${a.personalInfo?.lastName}`}
              email={a.personalInfo?.email}
              educationHistoriesCt={a.educationHistories.length}
              employmentHistoriesCt={a.employmentHistories.length}
              travelHistoriesCt={a.travelHistories.length}
              familyMembersCt={a.familyMembers.length}
              onEditRequest={() => onEditRequest(a.id)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const Dashboard: React.FC = () => (
  <AppContainer title="Dashboard" contents={<Contents />} />
);

export default Dashboard;
