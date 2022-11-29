/* html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
} */

import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR' !important;
    font-style: normal;
  }
  html, body {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }
  body > div {
    height: 100%;
  }
  button:hover {
    cursor: pointer
  }

`;
export default GlobalStyles;
