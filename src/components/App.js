import React from 'react';
import '../stylesheets/App.scss';
import {fetchCharacters, fetchIdCharacter} from '../services/api.js';
import CharacterList from './CharacterList'
import CharacterDetail from './CharacterDetail'
import Filters from './Filters';
import {Route, Switch } from 'react-router-dom';
import logo from '../images/logo.png'
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacteres: [],
      value: '',
      character: []
    };
    
    this.renderIdCharacter = this.renderIdCharacter.bind(this);
    this.fetchIdCharacter = this.fetchIdCharacter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.setState({
      value: value
    })
  }

  fetchIdCharacter(id){
    //if(id !== this.state.character.id){
      fetchIdCharacter(id).then(data => {
        this.setState({
          character: data
        })
      })
    //}
  }

  renderIdCharacter (props) {
    this.fetchIdCharacter(props.match.params.id)
    return <CharacterDetail character={this.state.character}/>
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
        <img src={logo} alt="logo"/> 
        <Switch>       
          <Route path="/" exact>
           
            <Filters
              handleChange= {this.handleChange}
            />
            <CharacterList 
              allCharacteres= {allCharacteres}
              value= {value}
            />
          </Route>
          <Route path="/character/:id" render={this.renderIdCharacter}></Route>
        </Switch>
      </div>

    );
  }
}

export default App;
