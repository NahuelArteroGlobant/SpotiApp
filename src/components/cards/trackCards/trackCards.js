import React from "react";
import "./trackCards.scss";

function TrackCards({ tracksSngs }) {
  return (
    <div className="container-card">
      <div className="container-card__artist">
        <h2>{tracksSngs.name}</h2>
      </div>
    </div>
  );
}

export default TrackCards;
