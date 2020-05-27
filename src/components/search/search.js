import React, { useState } from "react";
import "./search.scss";
//import { Redirect } from "react-router-dom";

import { GetArtists } from "../../service/searchService";

const Search = (props) => {
  const [query, setQuery] = useState("");
  // const state = {
  //   loading: false,
  //   error: null,
  //   query: {
  //     artists: [],
  //   },
  // };

  const inputValue = async (e) => {
    setQuery(e.target.value);
  };
  console.log("query: ", query);

  const handleValue = async (e) => {
    e.preventDefault();
    await GetArtists(query);
    props.props.history.push(`/artistsLists/${query}`);
    // try {
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <form className="container-search" onSubmit={handleValue}>
      <input
        type="text"
        className="container-search__input"
        placeholder="Search for an Artist"
        onChange={inputValue}
        value={query}
      />
    </form>
  );
};
export default Search;
