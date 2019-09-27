// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Route } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout/PrivateLayout";

// eslint-disable-next-line no-unused-vars
export default function PrivateRoute({ component: Component}) {
  return <Route render={props =>
    <PrivateLayout>
        <Component {...props} />
    </PrivateLayout>
    
} />;
}
