import React, { Component } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
export class AddDailog extends Component {
  render() {
    const { open, handleClose,children} = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          aria-describedby="form-dialog-description"
        >
          <DialogTitle id="form-dialog-title">
            {"Add Trainee"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="form-dialog-description">
            
            {children}
            </DialogContentText>
            <DialogContent></DialogContent>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default AddDailog;
