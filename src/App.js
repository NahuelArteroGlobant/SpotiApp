import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import ArtistsLists from "./pages/artistsLists/artistsLists";
import Artist from "./pages/artist/artist";
import Album from "./pages/album/album";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component= { Home } />
        <Route path="/artistsLists/:id" exact component= { ArtistsLists } />
        <Route path="/artist/:id" exact component= { Artist } />
        <Route path="/album/:id" exact component= { Album } />
      </Switch>
    </Router>
  );
}

export default App;

//Client ID c43f1354564140aebf2cf25645ad1dad
