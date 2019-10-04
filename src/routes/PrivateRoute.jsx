/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout/PrivateLayout";
import LocalStorageMethods from "../contexts/SnackBarProvider/LocalStorageMethods";

// eslint-disable-next-line no-unused-vars
function PrivateRoute({ component: Component, getItem, ...rest }) {
  if (!getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <Route
      {...rest}
      render={props => (
        <PrivateLayout>
          <Component {...props} />
        </PrivateLayout>
      )}
    />
  );
}
export default LocalStorageMethods(PrivateRoute);
