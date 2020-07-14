import React, { useState } from "react";
import { observer } from "mobx-react";

//Component
import MovieItem from "./MovieItem";
// import SearchBar from "./SearchBar";

//Styles
import { ListWrapper } from "../styles";

//Stores
import movieStore from "../stores/movieStore";

const MovieList = ({ deleteMovie }) => {
  const movieList = movieStore.movies.map((movie) => (
    <MovieItem deleteMovie={deleteMovie} movie={movie} key={movie.id} />
  ));
  return (
    <ListWrapper>
      <h4>{movieList}</h4>
    </ListWrapper>
  );
};

export default observer(MovieList);
