import React, { Component } from 'react'
import Row from './Row'
class Board extends Component {

  constructor(){
    super();
    this.state = {
      board : [
        [0,1,2],
        [3,4,5],
        [6,7,8]
      ],
      squares: Array(9).fill(null),
      currentTurn: null
    }
  }
  handleClick = (square) => {
    const squares = this.state.squares.slice();
    if(squares[square]) {
      return;
    }
    squares[square] = this.state.currentTurn ? 'X' : 'O';
    this.setState({
      squares: squares,
      currentTurn: !this.state.currentTurn,
    }, () => {
      if(this.Winner(squares)){
        this.setState({
          squares: Array(9).fill(null),
          currentTurn: this.state.currentTurn,
        }, () => {
          this.props.finish(this.state.currentTurn)
        })
      }
    });

  }
  Winner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [x, y, z] = lines[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  }
  render() {
    let { board } = this.state;
    return (
      <div className="game-board">
        {
          board.map((row) => {
            return (
              <Row 
                key={row} 
                row={row}
                click={this.handleClick}
                currentTurn={this.state.currentTurn}
                players={this.props.players}
                status={this.props.status}
              />
            )
          })
        }
      </div>
    )
  }
}


export default Board;
