/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import validationDailogSchema from "./component/AddDailog/ValidationDailogSchema";
import { TextField, Grid } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Mail from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      errors: {},
      isTouch: [],
      button: true,
      showPassword: false,
      confirmPassword: false
    };
  }

  handleFieldChange = event => {
    this.setState(
      { [event.target.name]: event.target.value },
      this.handleValidator
    );
  };

  toggleShowPassword = () => {
    const { showPassword } = this.state;
    // console.log("showpassword",showPassword);
    this.setState({ showPassword: !showPassword });
  };

  toggleConfirmPassword = () => {
    const { confirmPassword } = this.state;
    this.setState({ confirmPassword: !confirmPassword });
  };

  handleValidator = () => {
    let ErrorObj = {};
    const { name, email, password, confirm_password } = this.state;
    const valid = validationDailogSchema
      .validate(
        { name, email, password, confirm_password },
        { abortEarly: false }
      )
      .then(success => {
        this.setState({
          errors: {},
          button: false
        });
      })
      .catch(error => {
        //   console.log("error",error);
        error.inner.forEach(key => {
          // console.log("key",key);
          if (!ErrorObj[key.path]) {
            ErrorObj[key.path] = key.message;
          }
        });
        // console.log("error",ErrorObj);
        this.setState({
          errors: ErrorObj,
          button: true
        });
      });
    return valid;
  };

  hasErrors = value => {
    const { errors } = this.state;
    // console.log("isTouch",errors);
    // console.log("value",value);
    return errors[value];
  };

  isTouched = value => {
    const { isTouch } = this.state;
    // console.log("isTouch",isTouch);
    // console.log("value",value);
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
    //   console.log("value",value);
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
    const {
      name,
      email,
      password,
      showPassword,
      button,
      confirmPassword
    } = this.state;
    const { handlerFromParent, clickHandler } = this.props;
    const style = {
      margin: 12,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end"
    };

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              name="name"
              id="outlined-required"
              label="Name"
              defaultValue=""
              margin="normal"
              variant="outlined"
              fullWidth
              onChange={this.handleFieldChange}
              error={this.getError("name")}
              onBlur={this.blurHandler("name")}
              helperText={this.getError("name")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
          </Grid>

          <Grid item xs={12}>
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
          </Grid>

          <Grid item xs={6}>
            <TextField
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
                      onClick={this.toggleShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-adornment-password"
              variant="outlined"
              type={confirmPassword ? "text" : "password"}
              label="Confirm Password"
              name="confirm_password"
              onChange={this.handleFieldChange}
              error={this.getErrorBool("confirm_password")}
              onBlur={this.blurHandler("confirm_password")}
              helperText={this.getError("confirm_password")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      edge="start"
                      aria-label="Toggle password visibility"
                      onClick={this.toggleConfirmPassword}
                    >
                      {confirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>

        <div style={style}>
          <Button color="primary" onClick={clickHandler}>
            Cancel
          </Button>
          <Button
            color="primary"
            disabled={button}
            onClick={handlerFromParent(name, email, password)}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Form;
