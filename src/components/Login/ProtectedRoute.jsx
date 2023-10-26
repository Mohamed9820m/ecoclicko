import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRouteWrapper = ({ path, element }) => {
  const token = Cookies.get('token'); // Retrieve the token from the cookie

  if (token) {
    // If the user is authenticated, allow access to the route
    return <Route path={path} element={element} />;
  } else {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }
};

export default ProtectedRouteWrapper;
