import React from "react";

//style
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <>
      <label>Search in your list..</label>
      <SearchBarStyled
        onChange={(event) => props.setQuery(event.target.value)}
      />
    </>
  );
};

export default SearchBar;
