import React from "react";
// import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

// COMPROBAR QUE EL LINK SE AJUSTA AL MAQUETADO SI NO, DEJARLO SÓLO PARA LA FOTO

function CharacterList(props) {
  console.log(props);
  return (
    <ul className="list">
      <CharacterCard characters={props.characters} />
    </ul>
  );
}

export default CharacterList;
