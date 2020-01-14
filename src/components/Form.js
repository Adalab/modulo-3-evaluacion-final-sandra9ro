import React from "react";

function Form(props) {
  console.log(props.keepSearch);

  const handleSearch = ev => {
    props.handleSearch({
      value: ev.target.value,
    });
  };

  return (
    <form className="form">
      <label htmlFor="search-field" className="form__label"></label>
      <input
        onChange={handleSearch}
        type="text"
        id="search-field"
        className="form__input"
        value={props.state.search}
      />
    </form>
  );
}

export default Form;
