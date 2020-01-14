import React from "react";
import PropTypes from "prop-types";

function Form(props) {
  const handleSearch = ev => {
    props.handleSearch({
      value: ev.target.value,
    });
  };

  return (
    <form className="form">
      <label htmlFor="search-field" className="form-label">
        Encuentra a tu personaje favorito
      </label>
      <input
        onChange={handleSearch}
        type="text"
        id="search-field"
        className="form-input"
        value={props.state.search}
      />
    </form>
  );
}

Form.propTypes = {
  handleSearch: PropTypes.func,
  state: PropTypes.object,
};

export default Form;
