/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import NavBar from "./../../pages/NavBar/NavBar";
const style = {
  textAlign: "center"
};
const sampleTopone = {
  marginTop: "10vh",
  fontSize: "10vh",
  color:"grey"
};
const sampleTop = {
  marginTop: "10vh",
  color:"grey"
};
export class NoMatch extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div >
        <NavBar />
        <div style={style}>
          <h1 style={sampleTopone}>Not Found</h1>
          <h3 style={sampleTop}>
            Seems like the page you are looking after does not exist.
          </h3>
        </div>
      </div>
    );
  }
}

export default NoMatch;
