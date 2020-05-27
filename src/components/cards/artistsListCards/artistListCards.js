import React from "react";
import "./artistListCards.scss";

function ArtistListCards({ artist }) {
  return (
    <div className="container-card">
      <img
        className="container-card__img"
        src={artist.images[0] ? artist.images[0].url : ""}
        alt={artist.name}
      ></img>
      <div className="container-card__artist">
        <h2>{artist.name}</h2>
      </div>
    </div>
  );
}

export default ArtistListCards;
