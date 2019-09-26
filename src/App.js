// eslint-disable-next-line no-unused-vars
import React from "react";
import theme from "./theme";
// eslint-disable-next-line no-unused-vars
import { MuiThemeProvider } from "@material-ui/core/styles";
// import ChildrenDemo from './pages/childrenDemo/ChildrenDemo';
// import Trainee from './pages/Trainee/Trainee';
// eslint-disable-next-line no-unused-vars
import Login from "./pages/Login";
// eslint-disable-next-line no-unused-vars
// import NavBar from "./pages/NavBar/NavBar";

// import InputDemo from "./pages/InputFieldDemo/InputDemo";

const App = () => (
  <MuiThemeProvider theme={theme}>
    {/* <NavBar /> */}
    <Login />
    {/* <Trainee /> */}
    {/* <ChildrenDemo /> */}
    {/* <InputDemo /> */}
  </MuiThemeProvider>
);

export default App;
