import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  const handleSearch = ev => {
    props.handleSearch({
      value: ev.target.value,
    });
    ev.preventDefault();
  };

  const notSubmit = ev => {
    ev.preventDefault();
  };

  const handleRadio = ev => {
    props.handleSpecie({
      searchSpecie: ev.target.value,
    });
  };

  const handleOrigin = ev => {
    props.handleOrigin({
      value: ev.target.value,
    });
  };

  const handleGender = ev => {
    console.log(ev);
    props.handleGender({
      gender: ev.target.value,
    });
  };

  const handleStatus = ev => {
    console.log(ev.target.value);
    props.handleStatus({
      status: ev.target.value,
    });
  };

  return (
    <form className="form" onSubmit={notSubmit}>
      <label htmlFor="search-field" className="form-label">
        Busca a tu personaje favorito:
      </label>
      <input
        onChange={handleSearch}
        type="text"
        id="search-field"
        className="form-input"
        value={props.state.search}
      />
      <label htmlFor="origin">Busca por origen</label>
      <input
        type="text"
        id="origin"
        onChange={handleOrigin}
        value={props.state.origin}
      />

      <div>
        <label htmlFor="human">Humano</label>
        <input
          type="radio"
          id="human"
          name="species"
          value="Human"
          onChange={handleRadio}
          checked={props.searchSpecie === "species"}
        />
        <label htmlFor="alien">Alien</label>
        <input
          type="radio"
          id="alien"
          name="species"
          value="Alien"
          onChange={handleRadio}
        />
        <label htmlFor="all">Todos</label>
        <input
          type="radio"
          id="all"
          name="species"
          value="All"
          onChange={handleRadio}
        />
        <label htmlFor="gender">Género</label>
        <select name="gender" id="gender" onClick={handleGender}>
          <option value="All" disabled>
            Todos
          </option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
        </select>
        <select name="status" id="status" onClick={handleStatus}>
          <option value="All">Todos</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>
    </form>
  );
}

Form.propTypes = {
  handleSearch: PropTypes.func,
  state: PropTypes.object,
};

export default Form;
