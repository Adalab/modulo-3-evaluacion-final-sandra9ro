import React from "react";

function Form(props) {
  const handleSearch = ev => {
    props.handleSearch({
      value: ev.target.value,
    });
  };

  return (
    <form action="">
      <input type="text" onChange={handleSearch} />
    </form>
  );
}

export default Form;
