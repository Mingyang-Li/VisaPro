import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";
import Button from '@mui/material/Button';

const Dashboard = () => (
  <Card>
    <Title title="Welcome to VisaPro" />
    <CardContent>Welcome</CardContent>
    <Button>New application</Button>
  </Card>
);

export default Dashboard;
