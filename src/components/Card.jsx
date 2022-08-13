import React from 'react';
import { Link } from "react-router-dom";


export default function Card (props) {
    return (
        <Link to={`/Detail/${props.id}`}>
        <div className='card' onClick={props.Click}>
            <img src={props.img} alt="thumbnail" />
            <h1>{props.name}</h1>
            <h4>Alcoholic</h4>
        </div>
        </Link>
    )
}