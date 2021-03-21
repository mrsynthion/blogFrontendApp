import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-size:16px;
}
body{
 background-color:${({ theme }) => theme.colors.background};
}
`;

export default GlobalStyle;
