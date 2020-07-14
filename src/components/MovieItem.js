import React from "react";
import { observer } from "mobx-react";

//Components
import DeleteButton from "./buttons/DeleteButton";
// import UpdateButton from "./buttons/UpdateButton";

//Stores
import movieStore from "../stores/movieStore";

const MovieItem = ({ movie, deleteMovie }) => {
  return (
    <div>
      <p>{movie.name}</p>
      <DeleteButton movieId={movie.id} deleteMovie={deleteMovie} />
    </div>
  );
};

export default observer(MovieItem);
