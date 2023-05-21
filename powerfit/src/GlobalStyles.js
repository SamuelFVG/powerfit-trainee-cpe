import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: "Noto Sans", sans-serif;
    font-size: 15px;
    background-color: #0A0A16;
    color: #F2F1FB;

    padding: 0;
    margin: 0;
    @media (max-width: 700px) {
      font-size: 11px;
    }
  }

  a {
    color: inherit; 
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
