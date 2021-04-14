import styled from 'styled-components';

interface Props {
  isSmall?: boolean;
}

const Title = styled.h1<Props>`
  font-size: ${({ theme, isSmall }) =>
    isSmall ? theme.fontSize.h3 : theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.textTitle};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Title;
