import React from "react";
import "./artist.scss";
import { Link } from "react-router-dom";
import LayoutPages from "../../components/layouts/layoutPages/layoutPages";
import ArtistsCards from "../../components/cards/artistsCards/artistsCards";
import { GetAlbumTracks } from "../../service/searchService";

function Artist() {
  const albums = JSON.parse(localStorage.getItem("artistAlbums"));
  console.log("albums :", albums);

  const handleClick = (id) => {
    GetAlbumTracks(id);
  };
  return (
    <LayoutPages>
      <div className="container-artist">
        <h1>Artist</h1>

        <nav className="container-artists__list">
          <ul className="container-artists__list--menu">
            <li className="container-artists__list--items">
              <Link to="/">> Home</Link>
            </li>
            <li className="container-artists__list--items">
              <Link to="/artistsLists">> Artist</Link>
            </li>
            <li>
              <p className="container-artists__list--items--p">> Albums</p>
            </li>
          </ul>
        </nav>
        <section className="container-artists__cards">
          {albums.artistAlbums.items &&
            albums.artistAlbums.items.map((alb) => (
              <Link
                to={`/album/${alb.id}`}
                key={alb.name}
                onClick={() => handleClick(alb.id)}
              >
                <ArtistsCards albums={alb} />
              </Link>
            ))}
        </section>
      </div>
    </LayoutPages>
  );
}

export default Artist;
