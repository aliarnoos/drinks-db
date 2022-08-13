import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Detail from "./components/Detail";
import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import './styles.css'


const RouteSwitch = () => {
    const [cards, setCards] = useState([])

    const getAllData = () => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', {
        headers: {
            'Accept': 'application/json',
        }})
        .then(response=> response.json())
        .then(data => setCards(data.drinks.map(card=> <Card img={card.strDrinkThumb} name={card.strDrink} id={card.idDrink} key={card.idDrink} fetchDetails={()=>fetchDetails(card.idDrink)}  />)))
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
        setCards(data.drinks.map(card=> <Card img={card.strDrinkThumb} name={card.strDrink} key={card.idDrink}  id={card.idDrink} fetchDetails={()=>fetchDetails(card.idDrink)} />))
    }
    
    
    const [data, setData] = useState({ })
    const fetchDetails = async (drinkId) => {
        setData({})
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`, {
          headers: {
              'Accept': 'application/json',
          }})
          const data = await response.json()
          let ingredients='';
          for (let i=1; i<15; i++) {
            if (data.drinks[0][`strIngredient${i}`]===null) continue 
            ingredients = ingredients + data.drinks[0][`strIngredient${i}`] + ', '
          }
           setData({
           img: data.drinks[0].strDrinkThumb,
           name: data.drinks[0].strDrink,
           glass: data.drinks[0].strGlass,
           inst: data.drinks[0].strInstructions,
           ingr: ingredients
          })
      }


    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home  cards={cards} searchData={searchData}/>} />
          <Route path="/About" exact element={<About/>}/>
          <Route path="/Detail/:id"  element={<Detail data={data}/>}/>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;