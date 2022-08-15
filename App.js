import logo from './logo.svg';
import './App.css';

import React from 'react';

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedcharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    }
  }

  getNewCharacter() {
    console.log("Get new character from a button")
    const url = "https://swapi.dev/api/people/1"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedcharacter: true,
        })
      })
  }

  render() {
    return (
      <div>
        {
          this.state.loadedcharacter &&
          <div>
            <h1> {this.state.name} </h1>
            <p> {this.state.height} cm </p>
            <p> homeworld: {this.state.homeworld} </p>
            <ul>
              <li>{this.state.films}</li>
            </ul>
          </div>
        }

        < button type="button" onClick={() => this.getNewCharacter()
        } className="btn" > Randomise character</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <StarWars />
    </div>
  );
}

export default App;
