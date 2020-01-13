import React from "react";
import CharacterList from "./CharacterList";
import charactersData from "../api/charactersData";
// import charactersData from "../api/apiData.json";
import "../styles/App.css";
import Form from "./Form";

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

  // render

  render() {
    const filteredCharacters = this.state.characters.filter(character => {
      return (
        character.name,
        this.state.search,
        character.name.includes(this.state.search)
      );
      // return true;
    });

    // console.log(filteredCharacters);
    return (
      <div className="App">
        <header>
          <h1>Rick and Morty</h1>
        </header>
        <main>
          <Form handleSearch={this.handleSearch} />
          {/* <form action="">
            <input type="text" onChange={this.handleSearch} />
          </form> */}
          <ul>
            <CharacterList characters={filteredCharacters} />
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
