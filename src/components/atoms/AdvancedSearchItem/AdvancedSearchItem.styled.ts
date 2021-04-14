import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
  padding: 0 10px;
`;
export const Item = styled.input`
  text-align: center;
  height: auto;
  width: 100%;
  cursor: pointer;
  margin: 10px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.textNormal};
  justify-self: left;
  :first-letter {
    text-transform: uppercase;
  }
`;
