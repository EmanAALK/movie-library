import React, { useState } from "react";

//store
import movieStore from "../../stores/movieStore";

//styles
import { AddMovieStyled } from "../../styles";

const AddMovieButton = ({ movieName }) => {
  const handleAdd = () => movieStore.addMovie(movieName);

  return (
    <div>
      <AddMovieStyled onClick={handleAdd}>Add Movie To watch</AddMovieStyled>
    </div>
  );
};
export default AddMovieButton;
