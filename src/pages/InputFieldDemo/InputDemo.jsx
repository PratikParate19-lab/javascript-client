/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { InputBox } from "../../components/TextField/TextField";
import SelectBox from "../../components/SelectField/SelectField";
import {
  SPORTS,
  CRICKET_PLAYER,
  FOOTBALL_PLAYER
} from "../../configs/constant";
import RadioButton from "../../components/RadioGroup/RadioGroup";
import Button from "../../components/Button/Button";
import { validationSchema } from "../validationSchema";

class InputDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sports: "",
      Cricket: "",
      Football: "",
      errors: {},
      isTouch: [],
      button: false,
      role: ""
    };
  }
 
  handleChange = e => {
    this.setState({ name: e.target.value });
    this.handleValidator();
  };
  handleSportsChange = e => {
    if (e.target.value === "Select") {
      this.handleValidator();
      this.setState({ sports: "", Cricket: "", Football: "" });
    } else {
      this.handleValidator();
      this.setState({ sports: e.target.value, errors: { sports: "" } });
      console.log("states",this.state);
    }
  };

  handleCricketChange = e => {
    this.setState({ Cricket: e.target.value, Football: "", errors: { sports: "",role:'' } });
    this.handleValidator();
  };

  handleFootballChange = e => {
    this.setState({ Football: e.target.value, Cricket: "",errors: { sports: "",role:'' } });
    this.handleValidator();
  };

  blurHandler = event => () => {
    const { isTouch } = this.state;
    if (!isTouch.includes(event)) {
      isTouch.push(event);
    }
    this.handleValidator();
  };
  handleSubmitChange = event => {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.handleValidator();
    // console.log("inside");
  };
  handleValidator = () => {
    let ErrorObj = {};
    const { name, sports, role } = this.state;

    const valid = validationSchema
      .validate({ name, sports, role }, { abortEarly: false })
      .then(success => {
        this.setState({
          errors: {},
          button: true
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
          button: false
        });
      });
    console.log("valid", valid);
    return valid;
  };

  container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: "20"
  };
  hasErrors = value => {
    // console.log(this.state);
    const { errors } = this.state;
    // console.log("error", errors[value]);
    return errors[value];
  };

  isTouched = value => {
    // console.log(this.state);
    const { isTouch } = this.state;
    // console.log("isTouch.includes(value)", isTouch.includes(value));
    return isTouch.includes(value);
  };

  getError = value => {
    // console.log(this.state);
    const { errors } = this.state;

    // console.log("error", errors[value]);
    if (this.isTouched(value) && this.hasErrors(value)) {
      return errors[value];
    }

    return "";
  };
  renderOptions = () => {
    const { sports, errors } = this.state;

    if (!sports) {
      return null;
    }

    if (sports === "Cricket") {
      return (
        <div>
          <label>What you do ?</label>
          <div>
            <RadioButton
              options={CRICKET_PLAYER}
              name="role"
              onChange={this.handleCricketChange}
              error={this.getError("role")}
              onBlur={this.blurHandler("role")}
            />
            <p style={{ color: "red" }}>{errors.role}</p>
          </div>
        </div>
      );
    }

    if (sports === "Football") {
      return (
        <div>
          <label>What you do ?</label>
          <div>
            <RadioButton
              options={FOOTBALL_PLAYER}
              name="role"
              onChange={this.handleFootballChange}
              error={this.getError("role")}
              onBlur={this.blurHandler("role")}
            />
            <p style={{ color: "red" }}>{errors.role}</p>
          </div>
        </div>
      );
    }
  };

  render() {
    console.log(this.props);
    const { button, errors } = this.state;
    console.log(this.state);

    return (
      <>
        <div>
          <h4> Name: </h4>
          <InputBox
            value={this.state.name}
            onChange={this.handleChange}
            error={this.getError("name")}
            onBlur={this.blurHandler("name")}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        <div>
          <h4> Select the game you play? </h4>
          <SelectBox
            sports={SPORTS}
            onChange={this.handleSportsChange}
            error={this.getError("sports")}
            onBlur={this.blurHandler("sports")}
          />
          <p style={{ color: "red" }}>{errors.sports}</p>
        </div>

        {this.renderOptions()}
        <br />

        <div style={this.container}>
          <Button
            color="green"
            style={{ margin: "5px" }}
            value="Cancel"
            onClick={this.handleCancelChange}
          />

          <Button
            color="green"
            disabled={button}
            style={{ margin: "5px" }}
            value="Submit"
            onClick={this.handleSubmitChange}
          />
        </div>
      </>
    );
  }
}

export default InputDemo;
