import React from "react";

function Form(props) {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Form;
