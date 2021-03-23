import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap');
*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-size:16px;
    font-family: 'Montserrat', sans-serif;
}
body{
 background-color:${({ theme}) => theme.colors.dark.background};
}
a, button{
    font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
