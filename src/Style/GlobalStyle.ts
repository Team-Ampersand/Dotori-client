import styled, { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components';

export const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  button {
      cursor: pointer;
      outline: none;
  }

  * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; }

  html {
    overflow: hidden;
  }
`;

export const Positioner = styled.div`
  display: flex;
`

export const ContentWrapper = styled.div`
  display: inline-block;
  width: calc(100% - 15rem);
  background-color: #EDEDED;
  height: 100vh;
`