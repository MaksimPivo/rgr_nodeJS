import React from 'react';
import Tables from './Tables';
import store from '../store';

const ProtectedRoute = (props) => {
  const auth = store.getState().auth;
  if(auth){
    return <Tables></Tables>;
  } else{
    window.location.href = '/';
  };
}

export default ProtectedRoute;