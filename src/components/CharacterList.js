import React from "react";
// import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

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
