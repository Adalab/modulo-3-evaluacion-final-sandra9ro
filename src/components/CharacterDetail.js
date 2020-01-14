import React from "react";
import { Link } from "react-router-dom";

function CharacterDetail(props) {
  return (
    <div className="card">
      <Link to="/">
        <p className="back-link"> Volver</p>
      </Link>
      <div className="item">
        <h3 className="item__namegit ">{props.chosenCharacter.name}</h3>
        <img
          src={props.chosenCharacter.image}
          alt="personaje"
          className="item__photo"
        />
        <ul className="item__list">
          <li>Status: {props.chosenCharacter.status} </li>
          <li>Species: {props.chosenCharacter.species}</li>
          <li>Origin: {props.chosenCharacter.origin.name}</li>
          <li>Episodes: {props.chosenCharacter.episode.length}</li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;
