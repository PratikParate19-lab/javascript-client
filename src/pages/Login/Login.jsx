import React, { Component } from "react";
import { Grid, TextField, Avatar } from "@material-ui/core";
// import { Container, CssBaseline } from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import validationLoginSchema from "./validationLoginSchema";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Mail from "@material-ui/icons/Mail";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import { style } from "./style";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
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
    alignItems: "center",
    background: "#fff",
    borderRadius: "2px",
    padding: "8px",
    boxShadow: "1px 2px 2px 2px #d1d1d1"
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
      errors: {},
      isTouch: [],
      button: true,
      showPassword: false
    };
    this.handleFieldChange=this.handleFieldChange.bind(this);
  }

  handleFieldChange = event => {
    this.setState(
      { [event.target.name]: event.target.value },
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
    const valid = validationLoginSchema
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
    return valid;
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

  render() {
    const { button, showPassword } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Container>
          <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "75vh" }}
          >
            <Grid item xs={6} className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
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
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={button}
                >
                  Sign In
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default withStyles(style)(Login);
