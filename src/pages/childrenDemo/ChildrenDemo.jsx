// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Math from "../../components/Math/Math";
import template from "./template";
class ChildrenDemo extends Component {
  render() {
    return (
      <div>
        <Math first={1} second={2} operator="+">
        {template}
      </Math>

      <Math first={1} second={2} operator="-">
        {template}
      </Math>

      <Math first={1} second={2} operator="*">
        {template}
      </Math>

      <Math first={1} second={2} operator="^">
        {template}
      </Math>

      <Math first={1} second={4} operator="+">
        {template}
      </Math>
      </div>
    );
  }
}

export default ChildrenDemo;  
