import React from "react";
import "./App.css";
class WinnerBoard extends React.Component {
  render() {
    return (
      <div className="winner-board">
        <h2>Top winners of the game</h2>
        <ul className="winners-box">
          <li>
            <h2>{this.props.winner.name}</h2>
          </li>
        </ul>
      </div>
    );
  }
}

export default WinnerBoard;
