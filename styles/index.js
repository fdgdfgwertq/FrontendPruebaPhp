import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#7286A0',
    accent: '#BE6E46',
    dark: '#CDE7B0',
    background: '#59594A',
  },
};

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: "HelloMozza";
    src: url("/fonts/Hello-Mozza.ttf");
    font-weight: normal;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
  button,a,input[type="submit"],input[type="text"],input[type="password"],input[type="email"]{
    all: unset;
  }
`;
