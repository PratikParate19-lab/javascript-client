import React, { Component } from "react";
import { InputBox } from "../../components/TextField/TextField";
import SelectBox from "../../components/SelectField/SelectField";
import {
  SPORTS,
  CRICKET_PLAYER,
  FOOTBALL_PLAYER
} from "../../configs/constant";
import RadioButton from "../../components/RadioGroup/RadioGroup";

class InputDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", sports: "", Cricket: "", Football: "" };
  }
  handleChange = e => {  
    this.setState({ name: e.target.value });
  }
  handleSportsChange = e => {
    if(e.target.value === "Select"){
      this.setState({ sports: "", Cricket: "", Football: ""})
    }else{
      this.setState({ sports: e.target.value });
    }
  };

  handleCricketChange = e => {
    this.setState({ Cricket: e.target.value, Football: "" });
  };

  handleFootballChange = e => {
  
    this.setState({ Football: e.target.value, Cricket: "" });
  };

  renderOptions = () => {
    const { sports } = this.state;

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
          />
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
          />
          </div>
        </div>
      );
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div>
          <h4> Name: </h4>
          <InputBox value={this.state.name} onChange={this.handleChange} />
        </div>

        <div>
          <h4> Select the game you play? </h4>
          <SelectBox sports={SPORTS} onChange={this.handleSportsChange} />
        </div>

        {this.renderOptions()}
      </>
    );
  }
}

export default InputDemo;
