import { DefaultTheme } from 'styled-components';
const theme: DefaultTheme = {
  fontSize: {
    h1: '2rem',
    h2: '1.70rem',
    h3: '1.5rem',
    h4: '1.25rem',
    h5: '1.15rem',
    h6: '1rem',
  },
  colors: {
    light:{
      background:'#fff',
      backgroundSecondary:'#f9fafb',
      header:'pink',
      textNormal:'#222',
      textTitle:'#222',
      textLink:'#d23669'
    },
    dark:{
      background:'#282c35',
      backgroundSecondary:'#363c48',
      header:'#fff',
      textNormal:'hsla(0,0%,100%,0.88)',
      textTitle:'#fff',
      textLink:'pink'
    }
  },
};
export { theme };
