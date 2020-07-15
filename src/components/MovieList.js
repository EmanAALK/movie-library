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

  const [movie, setMovie] = useState("");

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const movieList = movieStore.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => (
      <MovieItem deleteMovie={deleteMovie} movie={movie} key={movie.id} />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <h1>to watch</h1>
      <input type="text" required value={movie.name} onChange={handleChange} />
      <AddMovieButton addMovie={addMovie} />
      <ListWrapper>
        <h4>{movieList}</h4>
      </ListWrapper>
    </>
  );
};

export default observer(MovieList);
