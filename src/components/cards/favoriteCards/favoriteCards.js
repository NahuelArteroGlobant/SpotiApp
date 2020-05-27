import React from "react";
import "./favoriteCards.scss";

function FavoriteCards() {
  return (
    <div className="container-card">
      <img
        className="container-card__img"
        src={process.env.PUBLIC_URL + "/images/img_avatar.png"}
        alt="Avatar"
      ></img>
      <div className="container-card__artist">
        <h2>Song</h2>

        <p>Artist:</p>

        <p>Album:</p>
      </div>
    </div>
  );
}

export default FavoriteCards;
