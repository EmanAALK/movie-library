import { decorate, observable } from "mobx";
import slugify from "react-slugify";

//Data
import movies from "../movies";

class MovieStore {
  movies = movies;

  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieId);
  };

  addMovie = (newMovie) => {
    newMovie.id = this.movies.push(newMovie);
  };
}

decorate(MovieStore, { movies: observable });

const movieStore = new MovieStore();
export default movieStore;
