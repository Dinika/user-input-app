import React, { Component } from 'react';
import Validation from './Validation/Validation.js';
import Character from './Chararacter/Character';
import './App.css';

class App extends Component {
  state = {
    userInput: '',
  }

  inputChangeHandler = (event) => {
    const userInput = event.target.value;
    this.setState({
      userInput: userInput
    });
  }

  characterClickedHandler = (event, index) => {
    const userInput = [...this.state.userInput]
    userInput.splice(index, 1)
    const splicedUserInput = userInput.join('')
    this.setState({
      userInput: splicedUserInput
    })
  }

  render() {
    return (
      <div className="App">
        <div class = "user-input">
          <input type="text" onChange= { this.inputChangeHandler } value={this.state.userInput}/>
          <Validation inputTextlength={this.state.userInput.length}/>
        </div>
        <div class="characters-container">
          { this.state.userInput.split('').map( (c, index) => {
              return <Character char={c} click={(event)=>this.characterClickedHandler(event, index)}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
