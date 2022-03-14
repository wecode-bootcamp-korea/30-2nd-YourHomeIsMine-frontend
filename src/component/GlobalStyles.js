import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url("https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

* {box-sizing: border-box;}
body {font-family: "Noto Sans";}
  `;

export default GlobalStyles;
