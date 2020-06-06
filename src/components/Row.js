import React, { Component } from 'react'
import Square from './Square'
class Row extends Component {

  handleClick = (value) => {

    this.props.click(value)
  }

  render() {
    let { row, currentTurn, players, status } = this.props
    return (
      <div className="game-row">
        {
          row.map((square) => {
            return (
              <Square 
                players={players}
                status={status}
                key={square}
                square={square} 
                currentTurn={currentTurn} 
                click={this.handleClick} 
              />
            )
          })
        }

      </div>
    )
  }
}


export default Row;
