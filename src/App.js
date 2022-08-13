import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import './styles.css'
import Card from './components/Card';

function App() {

const [cards, setCards] = useState([])

const getAllData = () => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', {
    headers: {
        'Accept': 'application/json',
    }})
    .then(response=> response.json())
    .then(data => setCards(data.drinks.map(card=> <Card img={card.strDrinkThumb} name={card.strDrink} id={card.idDrink} key={card.idDrink}  />)))
    document.querySelector('input').value=''
}
 useEffect( () => {
    getAllData()
}, [])

const searchData= async () => {
  if (document.querySelector('input').value==='') return getAllData()
   const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${document.querySelector('input').value}`, {
    headers: {
        'Accept': 'application/json',
    }})
    const data = await response.json()
    setCards(data.drinks.map(card=> <Card img={card.strDrinkThumb} name={card.strDrink} key={card.idDrink}  id={card.idDrink} />))
}


    // const [data, setData] = useState({ })
    // const fetchDetails = async (drinkId) => {
    //     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`, {
    //       headers: {
    //           'Accept': 'application/json',
    //       }})
    //       const data = await response.json()
    //       setData({
    //        img: data.drinks[0].strDrinkThumb,
    //        name: data.drinks[0].strDrink,
    //        glass: data.drinks[0].strGlass,
    //        inst: data.drinks[0].strInstructions,
    //     //    ingr: data.drinks[0].
    //       })
    //   }

  return (

    <div className='App'>
      <NavBar/>
      <div className='search-box'>
        <h2>Search Your Favorite Cocktail</h2>
          <input type='text' className='search-bar'  onChange={searchData}/>
      </div>
      <div className='cards-grid'>
      {cards}
      </div>
      <footer>Ali Muhsin, 2022</footer>
    </div>
  );
}

export default App;

