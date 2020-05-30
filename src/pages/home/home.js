import React from "react";
import { Link } from "react-router-dom";

import "./home.scss";

import AuthService from "../../service/auth";

import FavoriteCards from "../../components/cards/favoriteCards/favoriteCards";
import LayoutHome from "../../components/layouts/layoutHome/layoutHome";
import Search from "../../components/search/search";

const Home = ( props ) => {
  AuthService();

  return (
    <LayoutHome>
      <main className="container-home">
        <h2 className="container-home__title2">Welcome to</h2>
        <h1 className="container-home__title1">SPOTISEARCH</h1>
        <p className="container-home__text">
          Search your favourite songs over Spotify, just enter an artistist's
          name in the following search box and enjoy!
        </p>
        <div>
          <Search props= { props } />
        </div>
      </main>
      <section className="container-home__cards">
        <ul className="artists">
          { props.artists &&
              props.artists.map( (artist) => {
                return (
                  <li key= { artist.id } className="artistsHC">
                    <Link to={`/artistsLists/${artist.id}`} />
                  </li>
                );
              })
          }
        </ul>
        <h1>Favourite Songs</h1>
        <FavoriteCards />
        <FavoriteCards />
      </section>
    </LayoutHome>
  );
};

export default Home;
