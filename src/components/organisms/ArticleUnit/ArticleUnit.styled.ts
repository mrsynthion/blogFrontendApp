import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 180px;
  width: 50%;
  border-bottom: 0.1px dashed ${({ theme }) => theme.colors.opposite};
  padding: 5px;
  overflow: hidden;
`;

export const Tags = styled(Paragraph)`
  margin-top: 5%;
  font-style: italic;
  color: ${({ theme }) => theme.colors.opposite};
  font-size: ${({ theme }) => theme.fontSize.h6};
`;
export const StyledNavLink = styled(NavLink)`
  outline: none;
  text-decoration: none;
`;
