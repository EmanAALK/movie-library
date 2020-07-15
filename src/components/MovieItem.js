import React from "react";
import { observer } from "mobx-react";

//Components
import DeleteButton from "./buttons/DeleteButton";
import TransferButton from "./buttons/TransferButton";

//Style
import { ItemWrapper } from "../styles";

const MovieItem = ({ movie, deleteMovie, transferMovie }) => {
  return (
    <ItemWrapper className="container">
      <div className="row">
        <p className="col-4">{movie.name}</p>
        <DeleteButton
          className="col-4"
          movieId={movie.id}
          deleteMovie={deleteMovie}
        />
        <TransferButton
          className="col-4"
          movieName={movie.name}
          transferMovie={transferMovie}
        />
      </div>
    </ItemWrapper>
  );
};

export default observer(MovieItem);
