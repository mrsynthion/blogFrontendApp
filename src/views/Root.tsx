import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyle';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Paragraph>Siema siema</Paragraph>
      </div>
    </ThemeProvider>
  );
}

export default App;
