import React from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import CharacterList from "./CharacterList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <CharacterList />
        <ul>
          <li>
            <img src="" alt="imagen del personaje" />
          </li>
          <li>nombre del personaje</li>
          <li>especie</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
