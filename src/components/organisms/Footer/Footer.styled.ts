import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  height: 22px;
  border-top: solid 1px ${({ theme }) => theme.colors.opposite};
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 10;
`;

export const FooterWrap = styled.div`
  height: 100%;
  width: 25%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 18px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.textLink};
  text-decoration: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.opposite};
`;
