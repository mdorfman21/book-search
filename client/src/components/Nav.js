import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "../containers/Search";
import Saved from "../containers/Saved";

function Nav() {
  return (
    <Router>
      <div>
        <Link to="/search">Search</Link>
        <Link to="/saved">Saved</Link>
        <hr />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}
export default Nav;
