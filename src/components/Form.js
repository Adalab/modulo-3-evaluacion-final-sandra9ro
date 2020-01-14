import React from "react";

function Form(props) {
  // console.log("estoy recibiendo en Form", props.search);
  // console.log(props);
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
