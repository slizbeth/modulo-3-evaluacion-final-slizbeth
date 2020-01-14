import React from 'react';
import '../stylesheets/App.scss';
import {fetchCharacters} from '../services/api.js';
import CharacterList from './CharacterList'
import CharacterDetail from './CharacterDetail'
import Search from './Search';
import {Route, Switch } from 'react-router-dom';
import Header from './Header'
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacteres: [],
      value: ''
    };
    
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  getInputValue(value){
    this.setState({
      value: value
    })
  }

  renderCharacterDetail (props) {
    const id = props.match.params.id;
    const character = this.state.allCharacteres.find(character => character.id === parseInt(id));
    return <CharacterDetail character={character}/>
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
        <Header/>
        <Switch>       
          <Route path="/" exact>
            <Search
              getInputValue= {this.getInputValue}
              value= {value}
            />
            <CharacterList 
              allCharacteres= {allCharacteres}
              value= {value}
            />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail}></Route>
        </Switch>
      </div>

    );
  }
}

export default App;
