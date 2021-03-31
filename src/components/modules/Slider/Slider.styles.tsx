import styled, { css } from 'styled-components';
interface Props {
  clicked: boolean;
}

export const Wrapper = styled.div<Props>`
  width: 50px;
  height: 25px;
  border: none;
  margin: 0;
  border-radius: 30px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.opposite};
`;

export const Rectangle = styled.button<Props>`
  margin: 0;
  cursor: pointer;
  width: 50%;
  height: 100%;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme, clicked }) =>
    clicked ? theme.colors.background : theme.colors.backgroundSecondary};
  outline: none;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;

  ${({ clicked }) =>
    clicked &&
    css`
      transform: translateX(25px);
    `}
  :hover {
    border: solid 3px ${({ theme }) => theme.colors.textLink};
  }
`;
