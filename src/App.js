import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default App;
