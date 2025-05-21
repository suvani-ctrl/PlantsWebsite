


import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 6rem;
    font-weight: 900;
  }

  h2 {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 3rem;
    font-weight: 700;
    white-space: normal;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
  }

 
`;
