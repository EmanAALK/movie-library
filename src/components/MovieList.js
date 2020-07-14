import React, { useState } from "react";
import { observer } from "mobx-react";
import { BsPlusCircle } from "react-icons/bs";

//Component
import MovieItem from "./MovieItem";
// import SearchBar from "./SearchBar";

//Styles
import { ListWrapper } from "../styles";
import SearchBar from "../components/SearchBar";

//Stores
import movieStore from "../stores/movieStore";

const MovieList = ({ deleteMovie }) => {
  const [query, setQuery] = useState("");

  const movieList = movieStore.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => (
      <MovieItem deleteMovie={deleteMovie} movie={movie} key={movie.id} />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <h1>to watch</h1>

      <ListWrapper>
        <h4>{movieList}</h4>
      </ListWrapper>
    </>
  );
};

export default observer(MovieList);
