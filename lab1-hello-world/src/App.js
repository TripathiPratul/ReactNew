import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      person: 'Partul'
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello { this.state.person}!
          </p>
          <button onClick={()=> this.setState({ person: 'git user'})}>Welcome</button>
        </header>
      </div>
    );
  }
}

export default App;
