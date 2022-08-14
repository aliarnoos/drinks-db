import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


function Detail (props) {
    return ( 
        <>
        <NavBar/>
        <div className='info-card'>
            <img src={props.data.img} alt="drink" />
            <div className='detail-info'>
                <ul>
                    <li>
                        <h3>Name:</h3>
                        <p>{props.data.name}</p>
                    </li>
                    <li>
                        <h3>Glass:</h3>
                        <p>{props.data.glass}</p>
                    </li>
                    <li>
                        <h3>Instructions:</h3>
                        <p>{props.data.inst}</p>
                    </li>
                    <li>
                        <h3>Ingredients:</h3>
                        <p> {props.data.ingr}</p>
                    </li>
                </ul>
               <Link to="/"> <button className='back-btn'> Go Back </button></Link>
            </div>
        </div>
        </>
     );
}

export default Detail ;