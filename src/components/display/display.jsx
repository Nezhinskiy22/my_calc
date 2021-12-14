import React from "react";
import "./display.css";

const Display = ({ num, res }) => {
  return (
    <div className="display">
      <h1>{num}</h1>
      <h3>{res}</h3>
    </div>
  );
};

export default Display;
