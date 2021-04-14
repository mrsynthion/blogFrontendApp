import styled from 'styled-components';

export const Wrapper = styled.input`
  width: 200px;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.colors.opposite};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.opposite};
  padding: 10px;
  outline: none;
  margin: 5px 0;

  ::placeholder {
    color: ${({ theme }) => theme.colors.opposite};
  }
  :focus {
    ::placeholder {
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;
