/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import theme from "./theme";
// eslint-disable-next-line no-unused-vars
import { MuiThemeProvider } from "@material-ui/core/styles";
import ChildrenDemo from "./pages/childrenDemo/ChildrenDemo";
import Trainee from "./pages/Trainee/Trainee";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./pages/NoMatch/NoMatch";
import InputDemo from "./pages/InputFieldDemo/InputDemo";
import TextFieldDemo from "./pages/TextFieldDemo/TextFieldDemo";
import PrivateRoute from "./routes/PrivateRoute";
import AuthRoute from "./routes/AuthRoute";

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <PrivateRoute path="/trainee" component={Trainee} />
        <PrivateRoute path="/textFieldDemo" component={TextFieldDemo} />
        <PrivateRoute path="/inputDemo" component={InputDemo} />
        <PrivateRoute path="/childrenDemo" component={ChildrenDemo} />
        <AuthRoute path="/login" component={Login} />
        <PrivateRoute path="/" component={Trainee} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);
export default App;
