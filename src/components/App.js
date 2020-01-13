import React from 'react';
import '../stylesheets/App.css';
import {fetchCharacters} from '../services/api.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacteres: []
    };
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
    console.log(this.state);
    return (
      <div className="App">
        Rick & Morty Search
      </div>
    );
  }
}

export default App;
