import React, { Component } from 'react'

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search/search-field.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
  }
  render(){
    // store original value of array and searchbox
    const {monsters , searchField} = this.state;
    const filteredValue = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      // main body
      <div className="App">
        <header className="App-header">
          <SearchBox placeholder= "search here" 
            handleChnage={e => this.setState({searchField: e.target.value})} />
          {/* <input type="search" placeholder="search here" onChange={e => this.setState({searchField: e.target.value}, ()=> console.log(this.state)) } /> */}
          <CardList monsters={filteredValue} />
        </header>
      </div>
    );
  }
}
export default App;
