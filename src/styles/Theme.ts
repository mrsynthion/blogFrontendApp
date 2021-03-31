import { DefaultTheme } from 'styled-components';
const lightTheme: DefaultTheme = {
  fontSize: {
    h1: '2rem',
    h2: '1.70rem',
    h3: '1.5rem',
    h4: '1.25rem',
    h5: '1.15rem',
    h6: '1rem',
  },
  fontWeight: {
    normal: 400,
    bold: 900,
  },
  colors: {
    background: '#fff',
    backgroundSecondary: '#f9fafb',
    header: 'pink',
    textNormal: '#222',
    textTitle: '#222',
    textLink: '#d23669',
    opposite: '#282c35',
  },
};
const darkTheme: DefaultTheme = {
  fontSize: {
    h1: '2rem',
    h2: '1.70rem',
    h3: '1.5rem',
    h4: '1.25rem',
    h5: '1.15rem',
    h6: '1rem',
  },
  fontWeight: {
    normal: 400,
    bold: 900,
  },
  colors: {
    background: '#282c35',
    backgroundSecondary: '#363c48',
    header: '#fff',
    textNormal: 'hsla(0,0%,100%,0.88)',
    textTitle: '#fff',
    textLink: 'pink',
    opposite: '#fff',
  },
};
export { lightTheme, darkTheme };
