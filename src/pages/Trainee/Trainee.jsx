/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import { Switch, Route } from 'react-router-dom';
import TraineeList from "./TraineeList";
import TraineeDetails  from "./TraineeDetails";

class Trainee extends Component {
  render() {
console.log("props",this.props);
    const { match } = this.props;
    console.log("match trainee", match);
    return (
      <Switch>
        <Route exact path={match.path} component={TraineeList} />
        <Route exact path={`${match.path}/:id`} component={TraineeDetails} />
      </Switch>

    );
  }
}

export default Trainee;
