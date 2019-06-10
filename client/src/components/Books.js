import React from "react";
import Button from "./Button";
import Image from "./Image";

function Books(props) {
  console.log(props);
  let properGrammer;
  let useAuthors;
  let undefinedCheck;
  let checkSource;
  if (!props.authors) {
    undefinedCheck = 0;
  } else {
    undefinedCheck = props.authors.length;
  }

  if (props.src != null) {
    checkSource = props.src;
  } else {
    checkSource = "";
  }

  switch (undefinedCheck) {
    case 1:
      properGrammer = "Author:";
      useAuthors = props.authors;
      break;
    case 0:
      properGrammer = "No authors found";
      useAuthors = "";
      break;
    default:
      properGrammer = "Authors:";
      useAuthors = props.authors.join(", ");
      break;
  }
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <h4>
        {properGrammer} {useAuthors}
      </h4>
      <p>Description: {props.description}</p>
      <span>
        <img src={props.src} alt={props.title} />
      </span>
      <Button {...props} name={props.buttonName} />
    </div>
  );
}

export default Books;
