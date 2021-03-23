import styled from 'styled-components';

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  color:${({theme})=> theme.colors.dark.textTitle};
`;

export default Header;
