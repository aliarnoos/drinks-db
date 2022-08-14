import React from "react";
import NavBar from "./NavBar";

function Home(props) {
  return (
    <div className="App">
      <NavBar />
      <div className="search-box">
        <h2>Search Your Favorite Cocktail</h2>
        <input type="text" className="search-bar" onChange={props.searchData} />
      </div>
      <div className="cards-grid">{props.cards}</div>
    </div>
  );
}

export default Home;
