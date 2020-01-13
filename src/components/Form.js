import React from "react";
function Form(props) {
  console.log("estoy recibiendo en Form", props.search);

  return (
    <form action="">
      {/* <input type="text" value={this.state.value} /> */}
      <input type="text" value="" />
    </form>
  );
}

export default Form;
