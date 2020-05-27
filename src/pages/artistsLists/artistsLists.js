import React from "react";
import "./artistsLists.scss";
import { Link } from "react-router-dom";
import LayoutPages from "../../components/layouts/layoutPages/layoutPages";
import ArtistListCards from "../../components/cards/artistsListCards/artistListCards";
import { GetArtistAlbum } from "../../service/searchService";

const ArtistsLists = () => {
  const list = JSON.parse(localStorage.getItem("artistList"));
  console.log(list);

  let handleClick = (id) => {
    GetArtistAlbum(id);
  };
  return (
    <LayoutPages>
      <div className="container-artistsLists">
        <h1>List of Artists</h1>
        <nav className="container-artistsLists__list">
          <ul className="container-artistsLists__list--menu">
            <li className="container-artistsLists__list--items">
              <Link to="/">> Home</Link>
            </li>
            <li>
              <p className="container-artistsLists__list--items--p">
                > Artists
              </p>
            </li>
          </ul>
        </nav>
        <div className="container-artistsLists__cards">
          {list.artists.items &&
            list.artists.items.map((art) => (
              <Link
                to={`/artist/${art.id}`}
                key={art.name}
                onClick={() => handleClick(art.id)}
              >
                <ArtistListCards artist={art} />
              </Link>
            ))}
        </div>
      </div>
    </LayoutPages>
  );
};

export default ArtistsLists;
