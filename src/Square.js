import React, { Component } from 'react'
import X from './img/X.svg'
import O from './img/O.svg'
class Square extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
  }
  
  clickSquare = () => {
    let { square, currentTurn } = this.props
    let value = null;
    if(this.state.value === null){
      value = currentTurn ? X : O;
      this.setState({
        value: value
      }, () => {
        this.props.click(square)
      })
    }
  }
  resetSquare = () => {
    this.setState({
      value: null
    })
  }

  componentDidUpdate(props) {
    if(props.status === 'reset'){
      this.setState({
        value: null
      })
    }
  }

  render() {
    let { value } = this.state
    
    return (
      <div className="game-square" onClick={this.clickSquare}>
        { value ? <img src={value} alt="" /> : ''} 
      </div>
    )
  }
}


export default Square;
