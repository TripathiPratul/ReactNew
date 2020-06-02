import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      persons: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then( users => this.setState({persons: users}))
  }

  render(){
    return (
      <div className="App">
        {
          this.state.persons.map(person =>(
            <div key={person.id}> {person.name}
            </div>
        ))
        }
      </div>
    );
  }
}

export default App;
