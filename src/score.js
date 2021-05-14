import React from "react";

import "./App.css";
class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClose = (e) => {
    console.log("here", this.props.onClose);
    this.props.onClose(e); //this.props.show==false
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2 className="content">{this.props.children}</h2>{" "}
        <div className="actions">
          <button
            onClick={(e) => {
              this.onClose(e);
            }}
            className="toggle-button"
            id="centered-toggle-button"
          >
            close
          </button>
        </div>
      </div>
    );
  }
}

export default Play;
