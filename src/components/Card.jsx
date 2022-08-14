import { Link } from "react-router-dom";
import React from "react";

export default function Card(props) {
  return (
    <Link to={`/Detail/${props.id}`}>
      <div className="card" onClick={props.fetchDetails}>
        <img src={props.img} alt="thumbnail" />
        <h1>{props.name}</h1>
        <h4>Alcoholic</h4>
      </div>
    </Link>
  );
}
