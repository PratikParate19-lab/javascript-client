// // eslint-disable-next-line no-unused-vars
// import { React, Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// // eslint-disable-next-line no-unused-vars
// import AppBar from '@material-ui/core/AppBar';
// // eslint-disable-next-line no-unused-vars
// import Toolbar from '@material-ui/core/Toolbar';
// // eslint-disable-next-line no-unused-vars
// import Typography from '@material-ui/core/Typography';
// // eslint-disable-next-line no-unused-vars
// import Button from '@material-ui/core/Button';
// // import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles(theme => ({
//   root: {
//     // flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   menuNav:{
//       fontSize:12
//   }
// }));

// class NavBar extends Component {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar>
//         <Toolbar>
//           {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton> */}
//           <Typography variant="h6" className={classes.title}>
//             Trainee Portal
//           </Typography>

//           <Button size="small" color="inherit">Trainee</Button>
//           <Button size="small" color="inherit">TextField Demo</Button>
//           <Button size="small" color="inherit">Input Demo</Button>
//           <Button size="small" color="inherit">Children Demo</Button>
//           <Button size="small" color="inherit">Logout</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
// export default NavBar;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  button:{
    color:"white"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trainee Portal
          </Typography>

          <Link to="/trainee">
            <Button className={classes.button}>Trainee</Button>
          </Link>

          <Link to="/textFieldDemo">
            <Button className={classes.button}>TEXTFIELD DEMO</Button>
          </Link>

          <Link to="/inputDemo">
            <Button className={classes.button}>INPUT DEMO</Button>
          </Link>

          <Link to="/childrenDemo">
            <Button className={classes.button}>children DEMO</Button>
          </Link>

          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
