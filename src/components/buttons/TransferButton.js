import React, { useState } from "react";

//store
import movieStore from "../../stores/movieStore";

//styles
import { TransferButtonStyled } from "../../styles";

const TransferButton = ({ movieName }) => {
  const handleMove = () => movieStore.transferMovie(movieName);

  return (
    <div>
      <TransferButtonStyled onClick={handleMove}>Watched</TransferButtonStyled>
    </div>
  );
};
export default TransferButton;
