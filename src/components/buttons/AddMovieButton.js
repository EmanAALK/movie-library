import React, { useState } from "react";

//store
import movieStore from "../../stores/movieStore";

//styles
import { AddMovieStyled } from "../../styles";

const AddMovieButton = ({ movieId }) => {
  const handleAdd = () => movieStore.addMovie(movieId);

  return (
    <div>
      <AddMovieStyled onClick={handleAdd}>Add Movie To watch</AddMovieStyled>
    </div>
  );
};
export default AddMovieButton;
