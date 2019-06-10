import React from "react";

function Button(props) {
  return (
    <div>
      <button
        name={props.name}
        onClick={props.onClick}
        title={props.title}
        authors={props.authors}
        description={props.description}
        value={props.buttonValue}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
