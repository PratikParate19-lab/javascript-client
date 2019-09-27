// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars

import Footer from "../components/Footer/Footer";
// eslint-disable-next-line no-unused-vars
export default function AuthLayout({ children}) {
  return (
    <div>
      <div className="main" style={{marginTop:"8vh"}}>{children}</div>
      <Footer/>
    </div>
  );
}
