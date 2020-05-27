import React from "react";
import "./home.scss";
import Search from "../../components/search/search";
import AuthService from "../../service/auth";
import LayoutHome from "../../components/layouts/layoutHome/layoutHome";
import FavoriteCards from "../../components/cards/favoriteCards/favoriteCards";
import { Link } from "react-router-dom";

const Home = (props) => {
  AuthService();
  //console.log("props: ", props);
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
          <Search props={props} />
        </div>
      </main>
      <section className="container-home__cards">
        <ul className="artists">
          {props.artists &&
            props.artists.map((art) => {
              return (
                <li key={art.id} className="artistsHC">
                  <Link to={`/artistsLists/${art.id}`}></Link>
                </li>
              );
            })}
        </ul>
        <h1>Favotirte Songs</h1>

        <FavoriteCards />
        <FavoriteCards />
      </section>
    </LayoutHome>
  );
};
export default Home;
