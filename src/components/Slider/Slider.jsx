import React, { Component } from "react";
import { getRandomNumber,getNextRoundRobin } from "../../lib/utils/math";
import { align }from "./style";
import { PUBLIC_IMAGE_FOLDER } from "../../configs/constant"

class Slider extends Component {
constructor(props){
  super(props);
  console.log('props',props);
  this.state = {
      current: 0,
      random: props.random,
      banner: props.banner,
      height: props.height,
      defaultBanner : props.defaultBanner,
      max: props.banner.length,
  };
}

componentDidMount() {
  this.timerID = setInterval(() => this.counter(), this.props.duration);
}


componentWillUmount() {
  clearInterval(this.timerID);
}

counter() {
  const { max, random, current } = this.state;
  this.setState({
    current: random ? getRandomNumber(max) : getNextRoundRobin(max, current),
  });
}

render() {
  const { current, banner, altText, height, defaultBanner } = this.state;
  console.log(`${PUBLIC_IMAGE_FOLDER}${banner[current]}`);
  return (
    <div style={align}>
      <img src={PUBLIC_IMAGE_FOLDER+banner[current]||defaultBanner} alt={altText} height={height}/>
    </div>
  );
}
}

export default Slider;