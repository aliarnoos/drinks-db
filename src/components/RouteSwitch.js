import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import About from "./About";
import Detail from "./Detail";
import React, {useState, useEffect} from 'react';
const RouteSwitch = () => {


    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/About" exact element={<About/>}/>
          {/* <Route path="/Detail/:id"  element={<Detail img={data.img} glass={data.glass} inst={data.inst}  handleFetch={fetchDetails}  />}/> */}
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;