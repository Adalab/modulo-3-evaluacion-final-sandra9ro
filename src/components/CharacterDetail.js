import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterDetail(props) {
  return (
    <div className="detail">
      <div className="link-container">
        <Link to="/" className="link">
          <p className="back-link"> Volver</p>
        </Link>
      </div>
      <div className="item">
        <div className="img-container">
          <img
            src={props.chosenCharacter.image}
            alt="personaje"
            className="detail-photo"
          />
        </div>
        <div className="info">
          <ul className=" detail-list list-style">
            <li className="detail-name ">{props.chosenCharacter.name}</li>
            <li>Status: {props.chosenCharacter.status} </li>
            <li>Species: {props.chosenCharacter.species}</li>
            <li>Origin: {props.chosenCharacter.origin.name}</li>
            <li>Episodes: {props.chosenCharacter.episode.length}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  chosenCharacter: PropTypes.object,
};

export default CharacterDetail;
