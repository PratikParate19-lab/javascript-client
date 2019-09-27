// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import { Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
export default function AuthRoute({ component: Component}) {
    return <Route render={props =>
      <AuthLayout>
          <Component {...props} />
      </AuthLayout>
      
  } />;
  }
