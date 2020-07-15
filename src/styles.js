import styled, { createGlobalStyle } from "styled-components";

export const AddMovieStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const GlobalStyle = createGlobalStyle`
body{
  margin: 40px;
color: ${(props) => props.theme.gold};
background-color: ${(props) => props.theme.backgroundColor};
}`;

export const SearchBarStyled = styled.input`
  height: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  background-color: #f5f5f5;
`;

export const ListWrapper = styled.h4`
  margin-top: 40px;
  margin-right: 100px;
  justify-content: left;
  display: flex;
`;
