import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";

function Detail() {
  const params = useParams();
  const [data, setData] = useState({});

  const fetchDetails = async (drinkId) => {
    setData({});
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    let ingredients = "";
    for (let i = 1; i < 15; i++) {
      if (data.drinks[0][`strIngredient${i}`] === null) continue;
      ingredients += data.drinks[0][`strIngredient${i}`] + ", ";
    }
    setData({
      img: data.drinks[0].strDrinkThumb,
      name: data.drinks[0].strDrink,
      glass: data.drinks[0].strGlass,
      inst: data.drinks[0].strInstructions,
      ingr: ingredients,
    });
  };
  useEffect(() => {
    fetchDetails(params.id);
  }, []);
  return (
    <>
      <NavBar />
      <div className="info-card">
        <img src={data.img} alt="drink" />
        <div className="detail-info">
          <ul>
            <li>
              <h3>Name:</h3>
              <p>{data.name}</p>
            </li>
            <li>
              <h3>Glass:</h3>
              <p>{data.glass}</p>
            </li>
            <li>
              <h3>Instructions:</h3>
              <p>{data.inst}</p>
            </li>
            <li>
              <h3>Ingredients:</h3>
              <p> {data.ingr}</p>
            </li>
          </ul>
          <Link to="/drinks-db">
            <button className="back-btn"> Go Back </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Detail;
