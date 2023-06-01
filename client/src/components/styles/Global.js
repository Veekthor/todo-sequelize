import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  :root {
    --primary: #117fe6;
  }
  * {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
  }

  body {
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-align: inherit;
  }

  .rotate {
    animation: spin-element infinite 2s linear;
  }

  @keyframes spin-element {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;