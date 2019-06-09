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
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
