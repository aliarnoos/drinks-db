import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav>
        <h1>
          <Link to="/drinks-db">HomeCocktails</Link>
        </h1>
        <div className="nav-btns">
          <ul>
            <li>
              <Link to="/drinks-db">Home</Link>{" "}
            </li>
            <li>
              <Link to="/About"> About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
