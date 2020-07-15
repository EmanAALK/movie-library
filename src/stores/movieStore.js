import { decorate, observable } from "mobx";
import slugify from "react-slugify";

//Data
import movies from "../movies";

class MovieStore {
  movies = movies;

  addMovie = (movieName) => {
    const movieObj = { name: movieName };
    this.movies.push(movieObj);
  };

  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieId);
  };

  transferMovie = (movie) => {
    const watchedMovieObj = {};
    this.movies.watched === true
      ? (watchedMovieObj = this.movies.push(movie))
      : (this.movies.watched = false);
  };
}

decorate(MovieStore, { movies: observable });

const movieStore = new MovieStore();
export default movieStore;
