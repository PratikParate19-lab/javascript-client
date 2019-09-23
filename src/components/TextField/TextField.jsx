import React from "react";
import PropTypes from "prop-types";

import * as style from "./style";

export const InputBox = props => {
  const { value, error, disabled , onChange} = props;
  const { border, input } = style;
  const err = { ...border, ...input };
  const errorStyle = error ? err : input;

  return (
    <input
      type="text"
      style={errorStyle}
      defaultValue={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

InputBox.defaultProps = {
  error: ""
};

InputBox.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
