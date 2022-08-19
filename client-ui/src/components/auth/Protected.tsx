import React from 'react';
import { Navigate } from 'react-router-dom';

interface IProtected {
  isLoggedIn: boolean;
  children: any;
}

const Protected = (props: IProtected) => {
  if (!props.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return props.children;
};

export default Protected;
