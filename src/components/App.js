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
      searchSpecie: "All",
      origin: "",
      gender: "All",
      status: "All",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleSpecie = this.handleSpecie.bind(this);
    this.filterSpecie = this.filterSpecie.bind(this);
    this.handleOrigin = this.handleOrigin.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
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
    this.setState({
      search: data.value,
    });
  }

  handleSpecie(data) {
    this.setState({
      searchSpecie: data.searchSpecie,
    });
  }

  handleOrigin(data) {
    this.setState({
      origin: data.value,
    });
  }

  handleGender(data) {
    console.log(data);
    this.setState({
      gender: data.gender,
    });
  }

  handleStatus(data) {
    console.log(data.status);

    this.setState({
      status: data.status,
    });
  }

  // helper

  filterCharacterBySearch() {
    // const characters = this.state.characters;

    return this.state.characters
      .filter(character =>
        character.name.toLowerCase().includes(this.state.search.toLowerCase()),
      )
      .filter(
        character =>
          character.species === this.state.searchSpecie ||
          "All" === this.state.searchSpecie,
      )
      .filter(character =>
        character.origin.name
          .toLowerCase()
          .includes(this.state.origin.toLocaleLowerCase()),
      )
      .filter(
        character =>
          character.gender === this.state.gender || "All" === this.state.gender,
      )
      .filter(
        character =>
          character.status === this.state.status || "All" === this.state.status,
      );
  }

  filterSpecie() {
    return this.state.characters.filter(
      character =>
        character.species === this.state.searchSpecie ||
        "All" === this.state.searchSpecie,
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
    console.log(this.state.gender);

    return (
      <div className="app">
        <header className="header">
          <img src={logo} alt="R and M logo" />
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Form
                handleSearch={this.handleSearch}
                state={this.state}
                handleSpecie={this.handleSpecie}
                handleOrigin={this.handleOrigin}
                handleGender={this.handleGender}
                handleStatus={this.handleStatus}
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
