import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { DefaultTheme } from 'styled-components';

interface Props {
  children: any;
  Theme: DefaultTheme;
}

const MainTemplate: React.FC<Props> = ({ children, Theme }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default MainTemplate;
