import React, { useState } from "react";
import Button from "../button/button";
import Display from "../display/display";
import "./calculator.css";

const Calculator = () => {
  const [num, setNum] = useState("");
  const [res, setRes] = useState("");

  const addToNum = (val) => {
    setNum((num) => [...num, val + ""]);
  };

  const clearNum = () => {
    setNum("");
    setRes("");
  };

  const getResult = () => {
    setRes(eval(num.toString().replace(/,/g, "")));
  };

  return (
    <div className="calculator">
      <Display num={num} res={res} />
      <div className="row">
        <Button num={7} addNum={addToNum} />
        <Button num={8} addNum={addToNum} />
        <Button num={9} addNum={addToNum} />
        <Button num={"+"} addNum={addToNum} bgColor="#04771d" />
      </div>
      <div className="row">
        <Button num={4} addNum={addToNum} />
        <Button num={5} addNum={addToNum} />
        <Button num={6} addNum={addToNum} />
        <Button num={"-"} addNum={addToNum} bgColor="#04771d" />
      </div>
      <div className="row">
        <Button num={1} addNum={addToNum} />
        <Button num={2} addNum={addToNum} />
        <Button num={3} addNum={addToNum} />
        <Button num={"*"} addNum={addToNum} bgColor="#04771d" />
      </div>
      <div className="row">
        <Button num={0} addNum={addToNum} />
        <Button num={"."} addNum={addToNum} />
        <Button num={"="} addNum={getResult} bgColor="#d3931c" />
        <Button num={"/"} addNum={addToNum} bgColor="#04771d" />
      </div>
      <Button num={"C"} addNum={clearNum} width="270px" />
    </div>
  );
};

export default Calculator;
