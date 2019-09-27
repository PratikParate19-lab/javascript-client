import React from "react";
// eslint-disable-next-line no-unused-vars
import { Typography, TextField } from "@material-ui/core";
const template = value => {
  console.log("value", value);
  return (
    <Typography>
      <TextField
        id="standard-uncontrolled"
        label="Result"
        value={value}
        margin="normal"
      />
    </Typography>
  );
};

export default template;
