import React, { useState } from "react";
import { observer } from "mobx-react";
import { BsPlusCircle } from "react-icons/bs";

//Component
import MovieItem from "./MovieItem";
import AddMovieButton from "./buttons/AddMovieButton";

//Styles
import { ListWrapper } from "../styles";
import SearchBar from "../components/SearchBar";

//Stores
import movieStore from "../stores/movieStore";

const MovieList = ({ deleteMovie, addMovie }) => {
  const [query, setQuery] = useState("");

  const [movieName, setMovieName] = useState("");

  const handleChange = (event) => {
    setMovieName(event.target.value);
  };

  const movieList = movieStore.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => (
      <MovieItem deleteMovie={deleteMovie} movie={movie} key={movie.id} />
    ));

  return (
    <>
      <h4>Search in your list ..</h4>
      <SearchBar setQuery={setQuery} />
      <h1>to watch</h1>
      <input type="text" required value={movieName} onChange={handleChange} />
      <AddMovieButton movieName={movieName} />
      <ListWrapper>
        <h4>{movieList}</h4>
      </ListWrapper>
    </>
  );
};

export default observer(MovieList);
