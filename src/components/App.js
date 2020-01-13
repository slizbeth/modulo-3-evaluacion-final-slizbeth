import React from 'react';
import '../stylesheets/App.css';
import {fetchCharacters} from '../services/api.js';
import CharacterList from './CharacterList'
import Filters from './Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacteres: [],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.setState({
      value: value
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
    const {value, allCharacteres} = this.state;
    return (
      <div className="App">
        <Filters
          handleChange = {this.handleChange}
        />
        <CharacterList 
          allCharacteres = {allCharacteres}
          value = {value}
        />
      </div>
    );
  }
}

export default App;
