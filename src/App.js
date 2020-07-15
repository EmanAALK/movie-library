import React, { useState } from "react";

//components
import MovieItem from "./components/MovieItem";
import MovieList from "./components/MovieList";
import DeleteButton from "./components/buttons/DeleteButton";

//Styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#2f3a18",
  backgroundColor: "#F6F9F1",
  gold: "rgb(197, 166, 91)",
  red: "#ff3232",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MovieList />
    </ThemeProvider>
  );
}

export default App;
