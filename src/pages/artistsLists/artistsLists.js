import React, { useState, useEffect } from "react";
import "./artistsLists.scss";
import { Link } from "react-router-dom";
import LayoutPages from "../../components/layouts/layoutPages/layoutPages";
import ArtistListCards from "../../components/cards/artistsListCards/artistListCards";
import api from "../../service/searchService";

const ArtistsLists = () => {
  const query = localStorage.getItem("query");
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await api.spotify.getArtists(query);
      setResult(data.artists.items);
    } catch (error) {
      console.log(error);
    }
  };

  if (result !== "undefined") {
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
            {result &&
              result.map((art) => (
                <Link to={`/artist/${art.id}`} key={art.name}>
                  <ArtistListCards artist={art} />
                </Link>
              ))}
          </div>
        </div>
      </LayoutPages>
    );
  } else {
    return <div />;
  }
};

export default ArtistsLists;
