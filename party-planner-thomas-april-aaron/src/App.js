import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      photographer: "Yes",
      balloons: 0
    }
  }

  addBalloons = () => {
    this.setState({balloons: this.state.balloons + 1})
  }

  render(){
    return(
      <React.Fragment>
        <p>Photographer: { this.state.photographer } </p>
        <p>DJ</p>
        <p>Balloons: {this.state.balloons}
        <button onclick="addBalloons">add balloons</button>
        </p>

        <p>People</p>
        <p>Cake</p>
        <p>Entrees</p>
        <p>Snacks</p>
        <p>Microphone</p>
        <p>Beverages</p>
        <p>Bartender</p>



      </React.Fragment>
    )
  }
}
export default App
