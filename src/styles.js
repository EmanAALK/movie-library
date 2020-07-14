import styled, { createGlobalStyle } from "styled-components";

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const GlobalStyle = createGlobalStyle`
body{
  margin: 40px;
color: ${(props) => props.theme.gold};
background-color: ${(props) => props.theme.backgroundColor};
}`;

export const ListWrapper = styled.h4`
  margin-top: 40px;
  margin-right: 100px;
  justify-content: left;
  display: flex;
`;
