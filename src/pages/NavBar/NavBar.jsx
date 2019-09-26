// eslint-disable-next-line no-unused-vars
import { React, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import AppBar from '@material-ui/core/AppBar';
// eslint-disable-next-line no-unused-vars
import Toolbar from '@material-ui/core/Toolbar';
// eslint-disable-next-line no-unused-vars
import Typography from '@material-ui/core/Typography';
// eslint-disable-next-line no-unused-vars
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuNav:{
      fontSize:12
  }
}));

class NavBar extends Component {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Trainee Portal
          </Typography>
          
          <Button size="small" color="inherit">Trainee</Button>
          <Button size="small" color="inherit">TextField Demo</Button>
          <Button size="small" color="inherit">Input Demo</Button>
          <Button size="small" color="inherit">Children Demo</Button>
          <Button size="small" color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;