import React from "react";
import "./albumCards.scss";

function AlbumCards({ tracks }) {
  return (
    <div className="container-card">
      <h2>{tracks.name}</h2>

      <audio className="controls" controls controlsList="nodownload">
        <source src={tracks.preview_url} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default AlbumCards;
