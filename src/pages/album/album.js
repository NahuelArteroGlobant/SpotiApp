import React, { useState, useEffect } from "react";
import "./album.scss";
import { Link } from "react-router-dom";
import LayoutPages from "../../components/layouts/layoutPages/layoutPages";
import AlbumCards from "../../components/cards/albumCards/albumCards";
import api from "../../service/searchService";

function Album(props) {
  const albumId = props.match.params.id;
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await api.spotify.getAlbumTracks(albumId);
      setTracks(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  if (tracks.length > 1) {
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
            {tracks && tracks.map((trck) => <AlbumCards tracks={trck} />)}
          </section>
        </div>
      </LayoutPages>
    );
  } else {
    return <div />;
  }
}

export default Album;
