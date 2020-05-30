import React, { useState, useEffect } from "react";
import "./artist.scss";
import { Link } from "react-router-dom";
import LayoutPages from "../../components/layouts/layoutPages/layoutPages";
import ArtistsCards from "../../components/cards/artistsCards/artistsCards";
import api from "../../service/searchService";

function Artist(props) {
  const albumId = props.match.params.id;
  const [albums, setAlbums] = useState([]);
  console.log("albums :", albums);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await api.spotify.getArtistAlbums(albumId);
      console.log(data.items);
      setAlbums(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  if (albums.length > 1) {
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
            {albums &&
              albums.map((alb) => (
                <Link to={`/album/${alb.id}`} key={alb.name}>
                  <ArtistsCards albums={alb} />
                </Link>
              ))}
          </section>
        </div>
      </LayoutPages>
    );
  } else {
    return <div />;
  }
}

export default Artist;
