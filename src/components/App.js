import React from "react";
import { Route, Switch } from "react-router-dom";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import charactersData from "../api/charactersData";
import "../styles/App.css";
import Form from "./Form";
import CharacterDetail from "./CharacterDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: "",
      episodes: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleEpisodes = this.handleEpisodes.bind(this);
  }

  componentDidMount() {
    charactersData().then(characters => {
      this.setState({
        characters: characters,
      });
    });
  }

  //events

  handleSearch(data) {
    console.log(data);
    
    this.setState({
      search: data.value,
    });
  }

  handleEpisodes(data) {
    this.setState({
      episodes: data.episodes,
    });
    console.log(data.episodes);
  }

  // helper

  filterCharacterBySearch() {
    return this.state.characters
      .filter(character =>
        character.name.toLowerCase().includes(this.state.search.toLowerCase()),
      )
      .filter(
        character =>
          parseInt(character.episode.length) ===
            parseInt(this.state.episodes) || "" === this.state.episodes,
      );
  }

  // render

  renderCharacterDetail(props) {
    const route = parseInt(props.match.params.id);
    const chosenCharacter = this.state.characters.find(
      character => character.id === route,
    );
    if (chosenCharacter !== undefined) {
      return (
        <CharacterDetail
          character={this.state}
          chosenCharacter={chosenCharacter}
        />
      );
    }
  }

  render() {
    // console.log(this.state);

    return (
      <div className="app">
        <header className="header">
          <img src={logo} alt="RandM logo" />
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Form
                handleSearch={this.handleSearch}
                state={this.state}
                handleEpisodes={this.handleEpisodes}
              />

              <CharacterList characters={this.filterCharacterBySearch()} />
            </Route>
            <Route
              path="/character/:id"
              render={this.renderCharacterDetail}
            ></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
