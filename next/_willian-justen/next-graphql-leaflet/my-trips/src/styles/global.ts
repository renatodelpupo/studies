import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #030518;
    --container: 100rem;
    --highlight: #e20e8d;
    --large: 5rem;
    --medium: 3rem;
    --small: 1.5rem;
    --white: #eeeeee;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--highlight);
  }

  a,
  p {
    font-size: 2rem;
    line-height: var(--medium);
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    background: var(--background);
    color: var(--white);
    height: 100%;
  }

  body {
    font-family: 'Helvetica Neue', sans-serif;
  }
`

export default GlobalStyles
