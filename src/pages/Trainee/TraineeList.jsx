/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import AddDialog from "../Trainee/component/AddDailog/AddDailog";
import Button from "@material-ui/core/Button";
import Form from "../Trainee/Form";
import trainees from "./data/trainees";
import { Link } from "react-router-dom";
import Table from "../Table/Table";
import moment from "moment";
class TraineeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      user: {
        name: "",
        email: "",
        password: ""
      },
      orderBy: "",
      order: "asc"
    };
  }

  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: open ? false : true
    });
    console.log(this.state);
  };

  handleDataParent = (name, email, password) => event => {
    const { user, open } = this.state;
    user["name"] = name;
    user["email"] = email;
    user["password"] = password;
    this.setState({
      open: open ? false : true,
      user
    });

    console.log(this.state.user);
  };
  // getFormattedDate = date => {
  //   return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
  // };
  // handleSort = sort => {
  //   const { orderBy, order } = this.state;
  //   console.log("sortBy",sort);
  //   const sortBy = orderBy === sort && order === "desc";
  //   this.setState({
  //     order: sortBy ? 'asc':'desc',
  //     orderBy: sort
  //   });
  //   // console.log("this sort", this.state);
  // };
  render() {
    const { open, order, orderBy } = this.state;
    const { match } = this.props;
    // console.log(match);

    return (
      <>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClick}
          style={{ textAlign: "right" }}
        >
          Add Trainee List
        </Button>
        <AddDialog open={open} clickHandler={this.handleClick}>
          <Form
            handlerFromParent={this.handleDataParent}
            clickHandler={this.handleClick}
          />
        </AddDialog>
        <Table
          id="id"
          data={trainees}
          columns={[
            {
              field: "name",
              label: "Name",
              align: "center"
            },
            {
              field: "email",
              label: "Email",
              // format: value => value && value.toUpperCase()
            },
            // {
            //   field: "createdAt",
            //   label: "Date",
            //   algin: "right",
            //   // format: this.getFormattedDate
            // }
          ]}
          // orderBy={orderBy}
          // order={order}
          // onSort={this.handleSort}
          // onSelect={this.handleSelect}
        />
        <ul>
          {trainees.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}> {name} </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TraineeList;
