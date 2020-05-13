import React from "react";
// import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

// COMPROBAR QUE EL LINK SE AJUSTA AL MAQUETADO SI NO, DEJARLO SÓLO PARA LA FOTO

function CharacterList(props) {
  return (
    <ul className="list list-style characters-list">
      <CharacterCard characters={props.characters} />
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
