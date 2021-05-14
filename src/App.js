import "./App.css";
import Number from "./numbers";
import React from "react";
import WinnerBoard from "./winnerBoard";
import Play from "./score";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMoveX: true,
      squares: Array(9).fill(null),
      history: [],
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  colculateWinner(history) {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];
      if (history[a] === history[b] && history[b] === history[c]) {
        return history[a];
      }
    }
  }
  handleClick(i) {
    const squares = this.state.squares.slice(); //?
    squares[i] = this.state.currentMoveX ? "X" : "O";
    this.setState({
      squares: squares,
      currentMoveX: !this.state.currentMoveX,
      history: squares,
    });
  }
  renderButton(i) {
    return (
      <Number
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        className="button"
      />
    );
  }
  showModal(e) {
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    console.log(this.state.history, "this is here ");
    const winner = this.colculateWinner(this.state.history);
    let status;
    if (winner) {
      status = "You win!";
    } else {
      status = "next step: " + (this.state.currentMoveX ? "X" : "O");
    }
    return (
      <div className="App">
        <div className="grade">
          <h2> 0 win</h2>
          <h2> 0 draw</h2>
          <h2>0 lose</h2>
        </div>
        <div className="board">
          <div>
            {this.renderButton(0)}
            {this.renderButton(1)}
            {this.renderButton(2)}
          </div>
          <div>
            {this.renderButton(3)}
            {this.renderButton(4)}
            {this.renderButton(5)}
          </div>
          <div>
            {this.renderButton(6)}
            {this.renderButton(7)}
            {this.renderButton(8)}
          </div>
          <h2>{status}</h2>
          <button onClick={(e) => this.showModal()}> save result </button>
          <Play onClose={this.showModal} show={this.state.show}>
            <form className="form">
              <label>Name</label>
              <input className="name-label"></input>
              <label>Comment</label>
              <input></input>
            </form>
          </Play>
        </div>
        <WinnerBoard />
      </div>
    );
  }
}
export default App;
