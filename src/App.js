import React, { Component } from 'react';
import Validation from './Validation/Validation.js';

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

  render() {
    return (
      <div className="App">
        <input type="text" onChange= { this.inputChangeHandler } value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputTextlength={this.state.userInput.length}/>
      </div>
    );
  }
}

export default App;
