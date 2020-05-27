import React from "react";
import "./album.scss";
import { Link } from "react-router-dom";
import LayoutPages from "../../components/layouts/layoutPages/layoutPages";
import AlbumCards from "../../components/cards/albumCards/albumCards";

function Album() {
  const tracks = JSON.parse(localStorage.getItem("albumTracks"));
  console.log("tracks: ", tracks);

  return (
    <LayoutPages>
      <div className="container-album">
        <h1>Album Tracks</h1>

        <nav className="container-album__list">
          <ul className="container-album__list--menu">
            <li className="container-album__list--items">
              <Link to="/">> Home</Link>
            </li>
            <li className="container-album__list--items">
              <Link to="/artistsLists">> Artist</Link>
            </li>
            <li className="container-album__list--items">
              <Link to="/artist">> Album</Link>
            </li>
            <li>
              <p className="container-album__list--items--p">> Tracks</p>
            </li>
          </ul>
        </nav>
        <section className="container-album__cards">
          {tracks.albumTracks.items &&
            tracks.albumTracks.items.map((trck) => (
              <AlbumCards tracks={trck} />
            ))}
        </section>
      </div>
    </LayoutPages>
  );
}

export default Album;
