// eslint-disable-next-line no-unused-vars
import React from "react";
import theme from "./theme";
// eslint-disable-next-line no-unused-vars
import { MuiThemeProvider } from "@material-ui/core/styles";
import ChildrenDemo from "./pages/childrenDemo/ChildrenDemo";
import Trainee from "./pages/Trainee/Trainee";
// eslint-disable-next-line no-unused-vars
import Login from "./pages/Login";
// eslint-disable-next-line no-unused-vars
import NavBar from "./pages/NavBar/NavBar";
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
        <PrivateRoute exact path="/trainee" component={Trainee} />
        <PrivateRoute exact path="/textFieldDemo" component={TextFieldDemo} />
        <PrivateRoute exact path="/inputDemo" component={InputDemo} />
        <PrivateRoute exact path="/childrenDemo" component={ChildrenDemo} />
        <PrivateRoute exact path="/" component={Trainee} />
        <AuthRoute exact path="/login" component={Login} />
        <Route component={NoMatch}></Route>
      </Switch>
    </Router>
    {/* <NavBar /> */}
    {/* <Login /> */}
    {/* <Trainee /> */}
    {/* <ChildrenDemo /> */}
    {/* <InputDemo /> */}
  </MuiThemeProvider>
);

export default App;
