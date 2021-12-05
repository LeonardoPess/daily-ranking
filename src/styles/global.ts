import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;

    --gray-100: #E6E6E6;
    --gray-500: #666;
    --gray-800: #333;
    --gray-900: #1D2025;

    --purple-900: #11041D;
    --purple-700: #3b2553;

    --pink-200: #BD3ACD;
    --pink-500: #A041FE;

    --green-200: #9AE6B4;
    --green-500: #269C20;

    --red-500: #E53E3E;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body {
    height: 100%;
  }

  body {
    color: var(--white);
    background: var(--purple-900);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem  'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  .flex-align-center {
    display: flex;
    align-items: center;
  }

  .red-color {
    color: var(--red-500);
  }

  .green-color {
    color: var(--green-500);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .hide {
    display: none;
  }

  .load {
    width: 10%;

    display: block;
    position: fixed;
    top: calc(50% - (112px / 2));
    left: calc(50% - (112px / 2));

    -webkit-animation: 2s spin infinite linear;
    animation: 2s spin infinite linear;
  }
`
