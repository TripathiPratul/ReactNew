import React, {
  Component
} from 'react';
import {
  CardList
} from './components/card-list.component';
import './App.css';

import { SeacrhBox } from './components/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      persons: [],
      searchInupt: ''
    };

  //  this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({
        persons: users
      }))
  }

  // /**
  //  * NOTE: For every class method you have to bind 'this' in constructor.
  //  * Alternative is Arrow function.
  //  * @param  e 
  //  */
  // handleChangeEvent(e){
  //   this.setState({searchInupt: e.target.value});
  // }

  handleChangeEvent = (e) => {
    this.setState({searchInupt: e.target.value});
  }


  render() {
    const { persons, searchInupt } = this.state;
    const filteredPersons = persons.filter(person =>{
      return person.name.toLowerCase().includes(searchInupt.toLowerCase());
    })
    return ( 
      <div className = "App" >
        <SeacrhBox handleChange= { this.handleChangeEvent } />
        <CardList users={filteredPersons} />
      </div>
    );
  }
}

export default App;