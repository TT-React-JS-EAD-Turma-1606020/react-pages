import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  section {
    padding: 1rem;
    border: 1px solid red;
    border-radius: 16px;
  }

  body {
    font-family: "Alexandria", sans-serif;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  a {
    display: flex;
    border: none;
  }
`