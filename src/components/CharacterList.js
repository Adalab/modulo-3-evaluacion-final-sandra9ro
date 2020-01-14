import React from "react";
import { Link } from "react-router-dom";

// COMPROBAR QUE EL LINK SE AJUSTA AL MAQUETADO SI NO, DEJARLO SÓLO PARA LA FOTO

function CharacterList(props) {
  const handleChosenCharacter = ev => {
    // console.log("hola", ev.currentTarget.id, props);
    // props.handleChosenCharacter(ev.currentTarget.id);
    props.handleChosenCharacter({
      chosenCharacterId: ev.currentTarget.id,
    });
  };

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

export default CharacterList;
