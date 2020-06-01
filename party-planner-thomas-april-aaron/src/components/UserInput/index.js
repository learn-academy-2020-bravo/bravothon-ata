import React, { Component } from 'react'

class UserInput extends Component {

  render() {
    return (
      //the button has a function attached to it that will run whenever the input field is changed.
      <input className = "inputField"
        onChange={ this.props.handleChange }
        name = {this.props.fieldName}
      />
    )
  }
}

export default UserInput
