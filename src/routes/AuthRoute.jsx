/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import { Route, Redirect } from "react-router-dom";
import LocalStorageMethods from "../contexts/SnackBarProvider/LocalStorageMethods";
// eslint-disable-next-line no-unused-vars
function AuthRoute({ component: Component, getItem, ...rest }) {
  if (getItem("token")) {
    return <Redirect to="/trainee" />;
  }
  return (
    <Route
      {...rest}
      render={props => (
        <AuthLayout>
          <Component {...props} />
        </AuthLayout>
      )}
    />
  );
}
export default LocalStorageMethods(AuthRoute);
