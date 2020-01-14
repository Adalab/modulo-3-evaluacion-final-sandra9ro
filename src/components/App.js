import React from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import charactersData from "../api/charactersData";
// import charactersData from "../api/apiData.json";
import "../styles/App.css";
import Form from "./Form";
import CharacterCard from "./CharacterCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: "",
      chosenCharacterId: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderCharacterCard = this.renderCharacterCard.bind(this);
    this.handleChosenCharacter = this.handleChosenCharacter.bind(this);
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
    // console.log(data.value);
    this.setState({
      search: data.value,
    });
  }

  handleChosenCharacter(data) {
    // console.log(data);

    this.setState({
      chosenCharacterId: data.chosenCharacterId,
    });
  }

  // helper

  filterCharacterBySearch() {
    return this.state.characters.filter(character => {
      return character.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
  }

  // render

  renderCharacterCard(props) {
    console.log(this.state.chosenCharacterId);
    console.log(this.state, props.match.params.id);

    const chosenId = parseInt(this.state.chosenCharacterId);
    const characterId = this.state.characters.find(
      character => character.id === chosenId,
    );
    if (characterId !== undefined) {
      return (
        <CharacterCard character={this.state} chosenCharacter={characterId} />
      );
    }
  }

  render() {
    // console.log(filteredCharacters);
    return (
      <div className="App">
        <header>
          <h1>Rick and Morty</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Form handleSearch={this.handleSearch} />
              <ul>
                <CharacterList
                  characters={this.filterCharacterBySearch()}
                  handleChosenCharacter={this.handleChosenCharacter}
                />
              </ul>
            </Route>
            <Route
              path="/character/:id"
              render={this.renderCharacterCard}
            ></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
