import React from "react";

//Stors
import movieStore from "../../stores/movieStore";

//Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    movieStore.deleteMovie(props.movieId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
