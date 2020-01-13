import React from 'react';
import '../stylesheets/App.css';
import {fetchCharacters} from '../services/api.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacteres: [],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    this.setState({
      value: evt.target.value
    })
  }
  
  componentDidMount() {
    fetchCharacters()
    .then(data => {
      this.setState({
        allCharacteres: data.results
      })
   })
  }

  render() {
    return (
      <div className="App">
        <form>
            <label>
                <input type="text" onChange={this.handleChange} name="character" value={this.state.value}/>
            </label>
        </form>
        <ul>
          {this.state.allCharacteres
          .filter(character => this.state.value === '' || character.name.toLowerCase()
          .includes(this.state.value.toLowerCase()))
          .map((character) => <li key={character.id}>
            <img src={character.image} alt={character.name}/>
            <h4>{character.name}</h4>
            <p>{character.species}</p>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
