import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import './App.css';

class App extends Component {
  state = {
    characters: [],
  }
  removeCharacter = index => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })

  }
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  render() {
    const { characters } = this.state

    return (
      <div className="container">
      <nav className="nav">
        <h1 className="nav-link active" href="#">Akwaaba EITs</h1>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            < Form handleSubmit={this.handleSubmit} />
          </div>
          <div className="col-md-auto">
            <Table charactersData={this.state.characters} removeCharacter={this.removeCharacter} />
          </div>
        </div>

      </div>
      </div>
    )
  }
}

export default App;
