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
      user: {
        name: "",
        comment: "",
      },
      winner: {
        name: "",
      },
      score: {
        win: 0,
        draw: 0,
        lose: 0,
      },
      status: "",
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
        console.log("do we ever get here? ");
        return history[a];
      }
    }
  }
  handleClick(i) {
    const copyArr = this.state.squares.slice(); //?
    copyArr[i] = this.state.currentMoveX ? "X" : "O";
    this.setState({
      squares: copyArr,
      currentMoveX: !this.state.currentMoveX,
      //history: squares,
    });
    this.saveStatus(copyArr);
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

  handleChange = (e) => {
    this.setState({
      user: {
        name: e.target.value,
      },
    });
  };

  handleUserInformation = (e) => {
    this.setState({
      winner: {
        name: this.state.user.name,
      },
    });
  };

  saveStatus = (board) => {
    console.log(board, "history");
    const winner = this.colculateWinner(board);

    if (winner) {
      this.setState({
        status: "You win!",
        score: {
          win: +1,
          lose: +0,
          draw: 0,
        },
      });
    } else {
      this.setState({
        status: "next step: " + (this.state.currentMoveX ? "X" : "O"),
        score: {
          win: +0,
          lose: +1,
          draw: 0,
        },
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="grade">
          <h2> {this.state.score.win} win</h2>
          <h2> {this.state.score.draw} draw</h2>
          <h2>{this.state.score.lose} lose</h2>
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
          <h2>{this.state.status}</h2>
          <button onClick={(e) => this.showModal()}> save result </button>
          <Play onClose={this.showModal} show={this.state.show}>
            <form className="form">
              <label>Name</label>
              <input
                value={this.state.user.name}
                onChange={this.handleChange}
                className="name-label"
              ></input>
              <label>Win {this.state.score.win} times </label>
            </form>
            <button onClick={(e) => this.handleUserInformation()}>Save</button>
          </Play>
        </div>
        <WinnerBoard winner={this.state.winner} />
      </div>
    );
  }
}
export default App;
