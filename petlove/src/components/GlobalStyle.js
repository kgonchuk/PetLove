import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
   --font-family: "Manrope", sans-serif;
   --font-weight-medium: 500;
   --font-weight-semi-bold: 600;
  --font-weight-bold: 700;
   --font-weight-extra-bold: 800;
  --primary-transition: 0.3s ease-in-out;
 }

  body {
    margin: 0;
    font-family: "Manrope", sans-serif;
    /* color: ${({ $isHomePage, theme }) =>
      $isHomePage ? theme.colors.secondBackground : theme.colors.black};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(p) => p.theme.colors.background}; */
    /* padding: 32px; */
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul {
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  button {
    display: flex;
    margin: 0;
    align-items: center;
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;

  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
      font-family: inherit;
    color: inherit;
    outline: none;
  }

 textarea {
   resize: none;
 }
`;
