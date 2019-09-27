// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import NavBar from "../../pages/NavBar/NavBar";
// eslint-disable-next-line no-unused-vars
export default function PrivateLayout({ children, ...rest }) {
  return (
    <div>
      <NavBar />
      <br />
      <div className="main" style={{marginTop:"8vh"}}>{children}</div>
    </div>
  );
}
