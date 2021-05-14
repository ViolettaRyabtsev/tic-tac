import React from "react";
import "./App.css";

function Numbers(props) {
  return (
    <button onClick={props.onClick} className="buttons">
      {props.value}
    </button>
  );
}

export default Numbers;
