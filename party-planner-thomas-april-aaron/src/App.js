import React, {Component} from 'react';
import './App.css';
import UserInput from './components/UserInput'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      nounOne: "",
      verb: "",
      nounTwo: "",
      nounThree: "",
      adjective: "",
      verbTwo: "",
      adjectiveTwo: "",
      nounFour: "",
      madLib:""
    }
  }

  handleChange = event => {
    const {name,value} = event.target
    //const name = event.target.name
    //const value = event.target.value
    //more logic here as per the requirement
    this.setState({
        [name]: event.target.value,
    });
};

  clear = () => {
    this.setState({
      nounOne: "",
      verb: "",
      nounTwo: "",
      nounThree: "",
      adjective: "",
      verbTwo: "",
      adjectiveTwo: "",
      nounFour: "",
      madLib:"",
    })
  }

   createMadLib = () => {
      this.setState({ madLib: `There are ${this.state.nounOne} people. You need to purchase ${this.state.verb} cakes. There ${this.state.nounTwo} a DJ at the party.  There ${this.state.nounThree} a photographer at the party.  There is ${this.state.adjective} bottles of alochol at the party. There is ${this.state.verbTwo} strippers at the party.  There is ${this.state.adjectiveTwo} balloons at the party.  Remember to keep in mind ${this.state.nounFour} as an additional task for this party.`})
   }

  render() {
    return (
      <>
      {/* add container (div className='container')\
      - class = className
      - anytime you have text, wrap in a h1-6, p or span tag
      - instead of br, use margins and padding in your css
      - look into creating block element with css (display:block)
      */}
      <div className="container">
        <div className="row">
          <div className="center">
            <h1> Party Planner </h1>
          </div>
        </div>
        <div className="row">
          <div className="column left">
            <p>People Amount: </p>
            <p>Cake Amount: </p>
            <p>DJ (is/isn't): </p>
            <p>Photographer (is/isn't): </p>
            <p>Alcohol Amount (bottles): </p>
            <p>Stripper Amount: </p>
            <p>Balloons Amount: </p>
            <p>Did you want to add something? (leave blank if nothing): </p>
          </div>
          <div className="column middle">
            <p className="inputMargin">
              <UserInput
                handleChange={ this.handleChange}
                fieldName="nounOne"
              />
            </p>
            <p className="inputMargin">
              <UserInput
              handleChange={ this.handleChange}
              fieldName="verb"
              />
            </p>
            <p className="inputMargin">
              <UserInput
              handleChange={ this.handleChange}
              fieldName="nounTwo"
              />
            </p>
            <p className="inputMargin">
              <UserInput
              handleChange={ this.handleChange}
              fieldName="nounThree"
              />
            </p>
            <p className="inputMargin">
              <UserInput
               handleChange={ this.handleChange}
               fieldName="adjective"
              />
            </p>
            <p className="inputMargin">
              <UserInput
               handleChange={ this.handleChange}
               fieldName="verbTwo"
              />
            </p>
            <p className="inputMargin">
              <UserInput
               handleChange={ this.handleChange}
               fieldName="adjectiveTwo"
              />
            </p>
            <p className="inputMargin">
              <UserInput
               handleChange={ this.handleChange}
               fieldName="nounFour"
              />
            </p>
          </div>
          <div className="column right">
            <p className="story">{this.state.madLib}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column half buttonOne">
          <button onClick= {this.createMadLib}> Submit </button>
        </div>
        <div className="column half buttonTwo">
          <button onClick= {this.clear}> Clear </button>
        </div>
      </div>
      </>
    )
  }
}

export default App
