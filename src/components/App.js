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
    };
    this.handleSearch = this.handleSearch.bind(this);
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

  // helper

  filterCharacterBySearch() {
    return this.state.characters.filter(character => {
      return character.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
  }

  // render

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
                <CharacterList characters={this.filterCharacterBySearch()} />
              </ul>
            </Route>
            <Route path="/email/:id">
              <CharacterCard />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
