import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monstru.id}?set=set2&size=180x180`}
    />
    <h2>{props.monstru.name}</h2>
    <p>{props.monstru.email}</p>
  </div>
);
