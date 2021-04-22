import styled from 'styled-components';

export const Button = styled.button`
  width: 200px;
  height: 40px;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.textLink};
  color: ${({ theme }) => theme.colors.background};
`;
