import React from "react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  return props.characters.map(character => {
    return (
      <li key={character.id} className="list__card">
        <Link to={`/character/${character.id}`} id={character.id}>
          <ul className="card">
            <li>
              <img
                src={character.image}
                alt={character.name}
                className="card__photo"
              />
            </li>
            <li className="card__name">{character.name}</li>
            <li className="card__photo">{character.species}</li>
          </ul>
        </Link>
      </li>
    );
  });
}

export default CharacterCard;
