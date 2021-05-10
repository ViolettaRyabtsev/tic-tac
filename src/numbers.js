import React from "react";
import "./App.css";

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button onClick={this.props.onClick} className="buttons">
        {this.props.value}
      </button>
    );
  }
}

export default Numbers;
