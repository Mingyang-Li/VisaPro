import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import ApplicationCreate from '../application/ApplicationCreate';

const Dashboard = () => (
  <Card>
    <Title title="Welcome to VisaPro" />
    <CardContent>Welcome</CardContent>
    <ApplicationCreate />
  </Card>
);

export default Dashboard;
