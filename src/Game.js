import React, { Component } from 'react'
import Board from './Board'
import './Game.scss'
import GameSettings from './GameSettings'
class Game extends Component {
  constructor(){
    super();

    this.state = {
      run: false,
      player1: null,
      player2: null,
      errors: null,
      finish: false,
      winner: null
    }
  }

  setPlayers = (player, name) => {
    this.setState({
      [player]: name
    })
  }

  startGame = () => {
    let {player1, player2} = this.state;
    if(player1 && player2){
      this.setState({
        finish: false,
        run: true,
        status: 'running'
      })
    }
    else{
      this.setState({
        errors: 'Names for players is requierd.'
      })
    }
  }

  resetGame = () => {
    this.setState({
      finish: false,
      run: true,
      winner: null,
      status: 'reset'
    }, () => {
      this.setState({
        status: 'running'
      })
    })
  }

  finishGame = () => {
    let {player1, player2} = this.state;
    let winner;
    if(this.props.currentTurn){
      winner = player1
    }
    else{
      winner = player2
    }

    this.setState({
      finish: true,
      winner: winner
    })
  }

  render() {
    let { player1, player2, errors,winner,status } = this.state;
    let players = {
      player1: player1,
      player2:player2
    }
    let playersInfo;
    if(players.player1 && players.player2){
      playersInfo = `${players.player1} VS ${players.player2}`
    }
    return (
      <div className="game">
          {players && !winner ? <div className="game-info">{playersInfo}</div> : <div className="game-info">The Winner is { winner }</div> }
          { this.state.run ? <Board players={players} status={status} finish={this.finishGame} /> : <GameSettings errors={errors} add={this.setPlayers} start={this.startGame} /> }
          { this.state.finish ? <button className="game-reset" onClick={this.resetGame}>Reset</button>  : ''}
      </div>
    )
  }
}


export default Game;
