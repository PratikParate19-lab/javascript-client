import React from 'react';
import theme from "./theme";
import { MuiThemeProvider }from '@material-ui/core/styles';
// import ChildrenDemo from './pages/childrenDemo/ChildrenDemo';
import Trainee from './pages/Trainee/Trainee';

// import InputDemo from "./pages/InputFieldDemo/InputDemo";

const App = () =>
  <MuiThemeProvider  theme={theme}>
    <Trainee />
      {/* <ChildrenDemo /> */}
      {/* <InputDemo /> */}
  </MuiThemeProvider>

export default App;