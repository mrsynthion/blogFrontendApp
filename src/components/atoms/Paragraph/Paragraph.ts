import styled from "styled-components";

const Paragraph = styled.p`
    font-size:${({theme}) => theme.fontSize.h4};
    color: ${({theme}) => theme.colors.textNormal}
`;

export default Paragraph;
