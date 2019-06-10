import React from "react";
import Nav from "../components/Nav";
import Search from "./Search";
import Saved from "./Saved";

class OverallContainer extends React.Component {
  state = {
    path: ""
  };
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
export default OverallContainer;
