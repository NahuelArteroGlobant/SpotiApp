import React, { useState } from "react";
import "./search.scss";

const Search = (props) => {

  const [query, setQuery] = useState("");

  const inputValue = async (e) => {
    setQuery(e.target.value);
  };

  const handleValue = async (e) => {
    e.preventDefault();
    localStorage.setItem('query', query);
    window.location.href = `/artistsLists/${query}`;
  };

  return (
    <form className="container-search" onSubmit= { handleValue }>
      <input
        type="text"
        className="container-search__input"
        placeholder="Search for an Artist"
        onChange= { inputValue }
        value= { query }
      />
    </form>
  );
};
export default Search;
