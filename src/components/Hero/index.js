import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: ("heroimage.jpg") }}>
      {props.children}
    </div>
  );
}

export default Hero;
