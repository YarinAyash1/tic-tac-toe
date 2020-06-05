import React, { Component } from 'react'
import X from './img/X.svg'
import O from './img/O.svg'
class GameSettings extends Component {
  constructor(){
    super();
    this.state = {
      errors: null
    }
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.props.add(name, value)

  }
  handleClick = (e) => {
    this.props.start()
  }

  render() {
    let {errors} = this.props;
    return (
      <div className="game-settings">
        {errors}
        <div className="game-players">
          <label>Player 1:</label>
          <img src={X} alt="" />
          <input type="text" className={errors ? 'error' : ''} name="player1" onChange={this.handleChange} />
        </div>
        <div className="game-players">
        <label>Player 2:</label>
        <img src={O} alt="" />
          <input type="text" className={errors ? 'error' : ''} name="player2" onChange={this.handleChange} />
        </div>
        <button className="game-play"  onClick={this.handleClick}>Play</button>
      </div>
    )
  }
}


export default GameSettings;
