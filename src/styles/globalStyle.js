import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  
  html,
  body {
    width: 100%;
    height: 100%;
  }
  #__next {
    height: 100%;
    width: 100%;
  }
  #root {
    margin: 0 auto;
  }
  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }


`;

export default GlobalStyle

