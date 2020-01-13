import React from "react";
import CharacterList from "./CharacterList";
import charactersData from "../api/charactersData";
// import charactersData from "../api/apiData.json";
import "../styles/App.css";
// import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      value: "",
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
  handleSearch(ev) {
    console.log(ev.target.value);

    this.setState({
      value: ev.target.value,
    });
  }

  render() {
    // console.log(this.state.value);

    return (
      <div className="App">
        <header>
          <h1>Rick and Morty</h1>
        </header>
        <main>
          {/* <Form search={this.state.value} onChange={this.state.value} /> */}
          <form action="">
            <input type="text" onChange={this.handleSearch} />
          </form>
          <ul>
            <CharacterList characters={this.state.characters} />
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
