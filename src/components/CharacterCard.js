import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterCard(props) {
  return props.characters.map(character => {
    return (
      <li key={character.id} className="list-card">
        <Link
          to={`/character/${character.id}`}
          id={character.id}
          className="link"
        >
          <ul className="card list-style">
            <li>
              <img
                src={character.image}
                alt={character.name}
                className="card-photo"
              />
            </li>
            <div className="card-data">
              <li className="card-name">{character.name}</li>
              <li className="card-species">{character.species}</li>
            </div>
          </ul>
        </Link>
      </li>
    );
  });
}

CharacterCard.propTypes = {
  characters: PropTypes.array,
};

export default CharacterCard;
