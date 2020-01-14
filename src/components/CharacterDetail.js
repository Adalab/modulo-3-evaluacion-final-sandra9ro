import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterDetail(props) {
  return (
    <div className="detail">
      <Link to="/" className="link">
        <p className="back-link"> Volver</p>
      </Link>
      <div className="item">
        <h3 className="detail-name ">{props.chosenCharacter.name}</h3>
        <img
          src={props.chosenCharacter.image}
          alt="personaje"
          className="detail-photo"
        />
        <ul className=" detail-list list-style">
          <li>Status: {props.chosenCharacter.status} </li>
          <li>Species: {props.chosenCharacter.species}</li>
          <li>Origin: {props.chosenCharacter.origin.name}</li>
          <li>Episodes: {props.chosenCharacter.episode.length}</li>
        </ul>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  chosenCharacter: PropTypes.object,
};

export default CharacterDetail;
