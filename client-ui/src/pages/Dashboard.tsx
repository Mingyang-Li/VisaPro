import React from 'react';
import { useNavigate } from 'react-router-dom';
import { user, applicantIdCurrEditing, userInfo } from '../graphql/Store';
import { useQuery, useReactiveVar } from '@apollo/client';
import AppContainer from '../templates/appContainer/AppContainer';
import BasicCard from '../templates/card/Card';
import { Grid } from '@mui/material';
import ApplicantFormCreate from '../templates/applicantFormCreate/ApplicantFormCreate';
import { Query } from '../generated/graphql';
import { GET_APPLICANTS_BY_USER, GET_CURR_USER } from '../graphql/Queries';

const UpdatingCurrUser: React.FC = () => {
  const info = useReactiveVar(userInfo);
  const username = info.username;
  const { data } = useQuery<Query>(GET_CURR_USER, {
    variables: {
      username: username,
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
  return <></>;
};

const Contents: React.FC = () => {
  const { data } = useQuery<Query>(GET_APPLICANTS_BY_USER, {
    variables: {
      where: {
        createdBy: { id: sessionStorage.getItem('userId') },
        archived: { equals: null },
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
      <ApplicantFormCreate open={false} title={'New applicant'} />
      <Grid container spacing={2}>
        {data?.applicants.map((a) => (
          <Grid item lg={3} md={4} xs={12} key={a.id}>
            <BasicCard
              key={a.id}
              updatedAt={a.updatedAt}
              fullName={
                a.personalInfo?.firstName + ' ' + a.personalInfo?.lastName
              }
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
