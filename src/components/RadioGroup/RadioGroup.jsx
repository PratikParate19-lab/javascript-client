/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";

class Radio extends Component {
  

  render() {
    const { options, onChange, name } = this.props;
    const radioOptions = options.map(({ label, value }) => (
      <div key={value}>
        <input
          type="radio"
          value={value}
          name={name}
          id={value}
          onChange={onChange}
        />
        <label htmlFor={value}> {label} </label>
        <br />
      </div>
    ));
    return radioOptions;
  }
}

Radio.defaultProps = {
  error: "",
  options: []
};

Radio.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  options: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  }).isRequired
};

export default Radio;