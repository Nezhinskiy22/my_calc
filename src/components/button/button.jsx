import React from "react";
import "./button.css";

const Button = ({ num, bgColor, addNum, width }) => {
  return (
    <div>
      <button
        className="button"
        onClick={() => addNum(num)}
        style={{ backgroundColor: bgColor, width }}
      >
        {num}
      </button>
    </div>
  );
};

export default Button;
