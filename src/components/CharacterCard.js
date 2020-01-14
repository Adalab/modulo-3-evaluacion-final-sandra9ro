import React from "react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  console.log(props.chosenCharacter);
  return (
    <div className="card">
      <Link to="/">
        <p> Volver</p>
      </Link>
      <div className="card-item">
        <h3>{props.chosenCharacter.name}</h3>
        <img src={props.chosenCharacter.image} alt="personaje" />
        <ul>
          <li>Status: {props.chosenCharacter.status} </li>
          <li>Species: {props.chosenCharacter.species}</li>
          <li>Origin: {props.chosenCharacter.origin.name}</li>
          <li>Episodes: {props.chosenCharacter.episode.length}</li>
        </ul>
      </div>
    </div>
  );
  // } else {
  //   return <p> Volver</p>;
  // }
}

export default CharacterCard;
