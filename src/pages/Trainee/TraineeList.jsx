/* eslint-disable no-unused-vars */
import AddDialog from "../Trainee/component/AddDailog/AddDailog";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveDialog from "../Trainee/component/RemoveDailog/RemoveDailog";
import EditIcon from "@material-ui/icons/Edit";
import EditDialog from "../Trainee/component/EditDailog/EditDailog";
import Form from "../Trainee/Form";
import moment from "moment";
import LocalStorageMethods from "../../contexts/SnackBarProvider/LocalStorageMethods";
// import trainees from "./data/trainees";
import Table from "../Table/Table";
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withSnackBarConsumer } from "../../contexts/SnackBarProvider/withSnackBarConsume";
import { callApi } from "../../lib/utils/api";
import { async } from "q";
// import * as dotenv from 'dotenv';

// dotenv.config();
const apiUrl="https://express-training.herokuapp.com/api/trainee";
class TraineeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      orderBy: "",
      order: "asc",
      page: 0,
      user: {
        name: "",
        email: "",
        password: ""
      },
      openEditDialog: false,
      openDeleteDialog: false,
      currentUser: {},
      loader: true,
      data: [],
      loading: true,
      skip: 0,
      limit: 10
    };
  }

  componentDidMount = async () => {
    console.log("dsfdsfdsf", this.props);
    const { snackBarOpen, getItem } = this.props;
    const { loader, data, loading, skip, limit } = this.state;
    // debugger;
    try{
    const res = await callApi({
      url: apiUrl,
      params: { skip, limit },
      method: "get"
    });
    // debugger;
    console.log("success", res);
    this.setState({
      loading:false,
      data:  res.data.data.records
    })
    }catch(error){
      const err= error.response.data.message;
      snackBarOpen(err, "Error");
      console.log(error);
      this.setState({
        loading:false
      })
    }
  };
  reload = async () => {
    console.log("dsfdsfdsf", this.props);
    const { snackBarOpen, getItem } = this.props;
    const { loader, data, loading, skip, limit } = this.state;
    // debugger;
    try{
    const res = await callApi({
      url: apiUrl,
      params: { skip, limit },
      method: "get"
    });
    // debugger;
    console.log("success", res);
    this.setState({
      loading:false,
      data:  res.data.data.records
    })
    }catch(error){
      const err= error.response.data.message;
      snackBarOpen(err, "Error");
      console.log(error);
      this.setState({
        loading:false
      })
    }
  };

  handleClick = () => {
    console.log("state",this.state);
    const { open } = this.state;
    this.setState({
      open: open ? false : true
    });
    console.log("state",this.state);
  };

  handleClose = () => {
    const { snackBarOpen } = this.props;
    this.setState({
      open: false,
      openEditDialog: false,
      openDeleteDialog: false
    });
    snackBarOpen("This is an error message !", "error");
  };

  handleEditDialogueOpen = async obj => {
    this.setState({
      openEditDialog: true,
      currentUser: obj
    });
  };

  handleRemoveDialogueOpen = obj => {
    this.setState({
      openDeleteDialog: true,
      currentUser: obj
    });
  };

  onDeleteSubmit = async obj => {
    console.log("Delete Operation-->", obj);

    const { snackBarOpen } = this.props;
    
    try {
      const res = await callApi({
        url: apiUrl+'/'+`${obj._id}`,
        method: "delete"
      });
      console.log("success", apiUrl+'/'+`${obj._id}`);
      console.log("success", res);
      // this.setState({
      //   loading: false,
      //   data: res.data.data.records
      // });
      this.reload();
    } catch (error) {
      const err = error.response.data.message;
      snackBarOpen(err, "Error");
      console.log(error);
      this.setState({
        loading: false
      });
    }

    const check = moment(obj.createdAt).isAfter("2019-02-14");

    check
      ? snackBarOpen("This is a success message !", "success")
      : snackBarOpen("This is an error message !", "error");
  };

  handleDataParent = (name, email, password) => async event => {
    const { user, open } = this.state;
    const { snackBarOpen } = this.props;
    user["name"] = name;
    user["email"] = email;
    user["password"] = password;
    this.setState({
      open: open ? false : true
    });
// console.log
    try {
      const res = await callApi({
        url: apiUrl,
        method: "post",
        data: {
          name,
          email,
          password
        }
      });
      snackBarOpen(res.data.message, "success");
      console.log("success", res);
    } catch (error) {
      const err = error.response.data.message;
      snackBarOpen(err, "Error");
    }
  };

  getDateFormatted = date => {
    return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
  };

  handleSort = (event, property) => {
    const { order, orderBy } = this.state;
    const isDesc = orderBy === property && order === "desc";
    console.log(this.state);
    this.setState({
      order: isDesc ? "asc" : "desc",
      orderBy: property
    });
  };
  handleChangePage = async (event, newPage) => {
    const { snackBarOpen } = this.props;
    const { skip, limit } = this.state;
console.log(newPage);
    this.setState({
      page: newPage,
      skip: limit * newPage,
      // limit: limit * newPage,
      loading: true
    });

    try {
      const res = await callApi({
        url: apiUrl,
        params: { skip, limit },
        method: "get"
      });
      console.log("success", res.data.data.records);
      this.setState({
        loading: false,
        data: res.data.data.records
      });
    } catch (error) {
      const err = error.response.data.message;
      snackBarOpen(err, "Error");
      console.log(error);
      this.setState({
        loading: false
      });
    }

    console.log("state values skip", skip, "limit", limit);
  };

  clickHandler = () => {
    const { edit } = this.state;
    this.setState({
      edit: edit ? false : true
    });
  };

  render() {
    const {
      open,
      order,
      orderBy,
      page,
      openEditDialog,
      openDeleteDialog,
      currentUser,
      loading,
      data
    } = this.state;
    const { match } = this.props;

    return (
      <>
        <Button variant="outlined" color="primary" onClick={this.handleClick}>
          Add TRAINEE LIST
        </Button>
        <AddDialog openProp={open} clickHandler={this.handleClick}>
          <Form
            handlerFromParent={this.handleDataParent}
            clickHandler={this.handleClick}
          />
        </AddDialog>

        {openEditDialog && (
          <EditDialog
            open={openEditDialog}
            onClose={this.handleClose}
            data={currentUser}
          />
        )}
        <RemoveDialog
          open={openDeleteDialog}
          onClose={this.handleClose}
          data={currentUser}
          onSubmit={this.onDeleteSubmit}
        />
        
        <Table
          loading={loading}
          id="id"
          data={data}
          datalength={data.length}
          column={[
            { field: "name", label: "Name", align: "center" },
            {
              field: "email",
              label: "Email Address",
              format: value => value && value.toUpperCase()
            },
            {
              field: "createdAt",
              label: "Date",
              align: "right",
              format: this.getDateFormatted
            }
          ]}
          actions={[
            {
              icon: <EditIcon />,
              handler: this.handleEditDialogueOpen
            },
            {
              icon: <DeleteIcon />,
              handler: this.handleRemoveDialogueOpen
            }
          ]}
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
          count={600}
          page={page}
          onChangePage={this.handleChangePage}
        />

        {/* <ul>
          {trainees.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}> {name} </Link>
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default LocalStorageMethods(withSnackBarConsumer(TraineeList));
