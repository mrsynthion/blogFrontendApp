import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.colors.opposite};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.opposite};
  padding: 5px 10px;
  outline: none;
  margin: 5px 0;
  z-index: 4;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${({ theme }) => theme.colors.opposite};
`;

interface Props {
  active: boolean;
}
export const Wrapper = styled.div<Props>`
  display: ${({ active }) => (active ? 'grid' : 'none')};
  width: 200px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.colors.opposite};
  background-color: ${({ theme }) => theme.colors.background};
  grid-template-rows: 1fr 1fr 1fr;
  border-radius: 20px;
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.opposite};
  z-index: 3;
  position: absolute;
  top: 50px;
`;
export const MainWrapper = styled.div`
  position: relative;
  height: 200px;
`;
