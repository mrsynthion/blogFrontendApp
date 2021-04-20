import styled from 'styled-components';

interface InputProps {}

export const Input = styled.input<InputProps>`
  width: 30%;
  height: 50px;
  border-radius: 20px;
  margin: 10px;
  outline: none;
  text-align: left;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.opposite};

  :focus {
    ::placeholder {
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const TextArea = styled.textarea`
  width: 30%;
  height: 100px;
  border-radius: 20px;
  margin: 10px;
  outline: none;
  text-align: left;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.opposite};

  :focus {
    ::placeholder {
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;
