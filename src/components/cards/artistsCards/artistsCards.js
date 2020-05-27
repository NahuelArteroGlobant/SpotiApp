import React from "react";
import "./artistsCards.scss";

function ArtistsCards({ albums }) {
  return (
    <div className="container-card">
      <img
        className="container-card__img"
        src={albums.images[0] ? albums.images[0].url : ""}
        alt={albums.name}
      ></img>
      <div className="container-card__artist">
        <h2>{albums.name}</h2>
        <p>{albums.release_date}</p>
      </div>
    </div>
  );
}

export default ArtistsCards;
