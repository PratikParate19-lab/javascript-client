/* eslint-disable no-unused-vars */
import React from "react";

import { InputBox } from "../../components/TextField/TextField";
import  Slider  from "../../components/Slider/Slider";
import { banner } from "../../configs/constant";
import { inputText , styleText, errorStyle} from './style';


const TextFieldDemo = () => (
<>
  <div style = {styleText}>
  <Slider
  altText = "Default Banner"
  banner={banner}
  defaultBanner = '../../../public/images/default.png'
  duration = {2000}
  height = "200px"
  random = {false}
   />
  </div>

  <div
    style= {inputText}
  >
    <h4>This is Disabled Input</h4>
    <InputBox value="Disable Input" disabled />

    <h4>A valid box</h4>
    <InputBox value="Accessible" />

    <h4>input with an error</h4>
    <InputBox value="101" error="101" />
    <p style={errorStyle}>could not be greater than</p>

  </div>


</>
);

export default TextFieldDemo;