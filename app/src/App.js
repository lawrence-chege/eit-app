import React, {Component} from 'react';
import Table from './Table';
import './App.css';

class App extends Component {
render(){
  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]
  return(
    <div className="container">
      <h1>Hello World</h1>
      <Table charactersData = {characters}/>
    </div>
  )
}
}

export default App;
