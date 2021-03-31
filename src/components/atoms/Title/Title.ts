import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.textTitle};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Title;
