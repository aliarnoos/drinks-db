import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav>
        <h1>
          <Link to="/">HomeCocktails</Link>
        </h1>
        <div className="nav-btns">
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
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
