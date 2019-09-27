import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddDailog from "./component/AddDailog/AddDailog";
import Form from "./Form";

class Trainee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
  }
  handleDataParent = (name, email, password) => event => {
    console.log("State", this.state);
    const { user, open } = this.state;
    user["name"] = name;
    user["email"] = email;
    user["password"] = password;
    this.setState({
      open: open ? false : true,
      user: {
        name: name,
        email: email,
        password: password
      }
    });

    console.log("State", this.state.user);
  };
  handleClick = () => {
    const { open } = this.state;
    // console.log("open",open);
    this.setState({ open: open ? false : true });
  };
  render() {
    const { open } = this.state;
    return (
      <div style={{ marginTop: "15vh" }}>
        <Button color="primary" variant="outlined" onClick={this.handleClick}>
          Add Traineer
        </Button>
        <AddDailog open={open} onClick={this.handleClick}>
          {/* <Dailog>
    
</Dailog> */}
          <Form
            handlerFromParent={this.handleDataParent}
            clickHandler={this.handleClick}
          ></Form>
        </AddDailog>
      </div>
    );
  }
}
export default Trainee;
