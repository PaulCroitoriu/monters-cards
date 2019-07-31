import React from "react";
import "./card-list.css";
import { Card } from "../card/card.component";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monstri.map(monstru => (
        <Card key={monstru.id} monstru={monstru} />
      ))}
    </div>
  );
};
