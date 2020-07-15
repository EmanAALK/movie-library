import React, { useState } from "react";
import { observer } from "mobx-react";

//Component
import MovieItem from "./MovieItem";
import AddMovieButton from "./buttons/AddMovieButton";

//Styles
import { ListWrapper } from "../styles";
import SearchBar from "../components/SearchBar";

//Stores
import movieStore from "../stores/movieStore";

const MovieList = ({ deleteMovie, transferMovie }) => {
  const [query, setQuery] = useState("");
  const [movieName, setMovieName] = useState("");

  const handleChange = (event) => {
    setMovieName(event.target.value);

    // const handleTransfer = (event) => {
    //   movieStore[movie ? "transferMovie" : "createMovie"](movie);
    //   transferMovie();
  };

  const movieList = movieStore.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => (
      <MovieItem
        deleteMovie={deleteMovie}
        transferMovie={transferMovie}
        movie={movie}
        key={movie.id}
      />
    ));

  return (
    <>
      <input type="text" required value={movieName} onChange={handleChange} />
      <AddMovieButton movieName={movieName} />
      <div className="container-fluid">
        <div className="row">
          <ListWrapper>
            <h4>Search in your list ..</h4>
            <SearchBar setQuery={setQuery} />
            <div className="col-6">
              <h1>To watch</h1>
              <h4>{movieList}</h4>
            </div>
          </ListWrapper>

          <div className="col-6">
            <ListWrapper>
              <h4>Search in your list ..</h4>
              <SearchBar setQuery={setQuery} />
              <h1>Watched</h1>
              <h4>{movieList}</h4>
            </ListWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(MovieList);
