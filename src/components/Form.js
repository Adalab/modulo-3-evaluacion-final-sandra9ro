import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  const handleSearch = ev => {
    props.handleSearch({
      value: ev.target.value,
    });
    ev.preventDefault();
  };

  const handleEpisodes = ev => {
    console.log(props);

    props.handleEpisodes({
      episodes: ev.target.value,
    });
  };

  const notSubmit = ev => {
    ev.preventDefault();
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

      <label htmlFor="episodes">Número de episodios</label>
      <input type="text" id="episodes" onChange={handleEpisodes} />
    </form>
  );
}

Form.propTypes = {
  handleSearch: PropTypes.func,
  state: PropTypes.object,
};

export default Form;
