import React from 'react';
import '../stylesheets/App.css';
import {fetchCharacters} from '../services/api.js';
import CharacterList from './CharacterList'

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
    const {value} = this.state;
    return (
      <div className="App">
        <form>
            <label>
                <input type="text" onChange={this.handleChange} name="character" value={value}/>
            </label>
        </form>
        <CharacterList allCharacteres = {this.state.allCharacteres}/>
      </div>
    );
  }
}

export default App;
