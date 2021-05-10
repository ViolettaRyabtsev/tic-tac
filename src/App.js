import "./App.css";
import Number from "./numbers";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      currentMove: "X",
      squares: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    var nextMove = this.state.squares[i];
    nextMove = this.state.currentMove === "X" ? "O" : "X";
    console.log(nextMove, "next");
    var arr = this.state.squares.concat(nextMove);

    this.setState({
      squares: arr,
      currentMove: nextMove,
      value: nextMove,
    });
    console.log(this.state.squares, "here");
  }

  render() {
    return (
      <>
        <div className="App">
          <Number value={this.state.squares[0]} onClick={this.handleClick} />
          <Number value={this.state.squares[1]} onClick={this.handleClick} />
          <Number value={this.state.squares[2]} onClick={this.handleClick} />
          <div>
            {" "}
            <Number />
            <Number />
            <Number />
          </div>
          <div>
            {" "}
            <Number />
            <Number />
            <Number />
          </div>
        </div>
      </>
    );
  }
}

export default App;
