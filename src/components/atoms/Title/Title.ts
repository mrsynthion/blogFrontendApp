import styled from "styled-components";


const Title = styled.h3`
 font-size: ${({theme}) => theme.fontSize.h3};
 color:${({theme}) => theme.colors.dark.textTitle};
`;

export default Title;
