import React, { Component } from "react";
import Math from "../../components/Math/Math";
import template from "./template";
class ChildrenDemo extends Component {
  render() {
    return (
      <div>
        <Math first={7} second={10} operator="+">
          {template}
        </Math>
      </div>
    );
  }
}

export default ChildrenDemo;  
