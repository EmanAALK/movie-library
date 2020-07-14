import React from "react";
import MovieItem from "./components/MovieItem";
import MovieList from "./components/MovieList";
import DeleteButton from "./components/buttons/DeleteButton";

//Styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#2f3a18",
    backgroundColor: "#F6F9F1",
    gold: "rgb(197, 166, 91)",
    red: "#ff3232",
  },

  dark: {
    mainColor: "#f9ffed",
    backgroundColor: "#2f3a18",
    gold: "rgb(197, 166, 91)",
    red: "#ff3232",
  },
};

function App() {
  return (
    <>
      <MovieList />
    </>
  );
}

export default App;
