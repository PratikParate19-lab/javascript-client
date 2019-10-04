/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { callApi } from "../../lib/utils/api";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Mail from "@material-ui/icons/Mail";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import validationSchema from './validationLoginSchema';
import { Redirect } from "react-router-dom";
import { withSnackBarConsumer } from "../../contexts/SnackBarProvider/withSnackBarConsume";
import LocalStorageMethods from "../../contexts/SnackBarProvider/LocalStorageMethods";

const style = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    boxShadow: " 10px 10px 5px 0px rgba(250,250,250,1)"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
      errors: {},
      isTouch: [],
      button: true,
      redirect: false,
      loading: false
    };
  }

  handleFieldChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      this.handleValidator
    );
  };

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  handleValidator = () => {
    let ErrorObj = {};
    const { email, password } = this.state;
    const valid = validationSchema
      .validate({ email, password }, { abortEarly: false })
      .then(success => {
        this.setState({
          errors: {},
          button: false
        });
      })
      .catch(error => {
        error.inner.forEach(key => {
          if (!ErrorObj[key.path]) {
            ErrorObj[key.path] = key.message;
          }
        });
        this.setState({
          errors: ErrorObj,
          button: true
        });
      });
  };

  hasErrors = value => {
    const { errors } = this.state;
    return errors[value];
  };

  isTouched = value => {
    const { isTouch } = this.state;
    return isTouch.includes(value);
  };

  getError = value => {
    const { errors } = this.state;
    if (this.isTouched(value) && this.hasErrors(value)) {
      return errors[value];
    }
    return "";
  };

  getErrorBool = value => {
    if (this.isTouched(value) && this.hasErrors(value)) {
      return true;
    }
    return false;
  };

  blurHandler = event => () => {
    const { isTouch } = this.state;
    if (!isTouch.includes(event)) {
      isTouch.push(event);
    }
    this.setState(
      {
        isTouch
      },
      this.handleValidator
    );
  };

  handleSubmit = async event => {
    const { email, password } = this.state;
    const { snackBarOpen, setItem } = this.props;
    this.setState({
      loading: true
    });
    try {
      const res = await callApi({
        url:'https://express-training.herokuapp.com/api/user/login',
        method: "post",
        data: {
          email,
          password
        }
      });
      setItem("token", res.data.data);
      console.log("success", res.data.data);
      this.setState({
        redirect: true,
        loading: false
      });
    } catch (error) {
      const err = error.message;
      snackBarOpen(err, "error");
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { showPassword, button, redirect, loading } = this.state;
    if (redirect) {
      return <Redirect to="trainee" />;
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              required
              name="email"
              id="outlined-required"
              label="Email Address"
              defaultValue=""
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={this.handleFieldChange}
              error={this.getErrorBool("email")}
              onBlur={this.blurHandler("email")}
              helperText={this.getError("email")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              name="password"
              id="outlined-adornment-password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              label="Password"
              onChange={this.handleFieldChange}
              error={this.getErrorBool("password")}
              onBlur={this.blurHandler("password")}
              helperText={this.getError("password")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      edge="start"
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={button}
              onClick={this.handleSubmit}
            >
              {loading && <CircularProgress color="secondary" />}
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default LocalStorageMethods(withSnackBarConsumer(withStyles(style)(Login))
);
