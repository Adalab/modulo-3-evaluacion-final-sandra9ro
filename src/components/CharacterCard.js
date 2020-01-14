import React from "react";

function CharacterCard() {
  return props.characters.map(character => {
    return (
      <li key={character.id}>
        <Link
          to={`/character/${character.id}`}
          onClick={handleChosenCharacter}
          id={character.id}
        >
          <ul>
            <li>
              <img src={character.image} alt={character.name} />
            </li>
            <li>{character.name}</li>
            <li>{character.species}</li>
          </ul>
        </Link>
      </li>
    );
  });
}

export default CharacterCard;
