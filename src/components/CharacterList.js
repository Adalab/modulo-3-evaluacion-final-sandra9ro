import React from "react";

function CharacterList(props) {
  return props.characters.map(character => {
    return (
      <li key={character.id}>
        <ul>
          <li>
            <img src={character.image} alt={character.name} />
          </li>
          <li>{character.name}</li>
          <li>{character.species}</li>
        </ul>
      </li>
    );
  });
}

export default CharacterList;
