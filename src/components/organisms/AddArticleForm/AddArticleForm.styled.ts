import styled from 'styled-components';
interface Props {
  isSuccess?: boolean;
}

export const Wrapper = styled.div<Props>`
  width: 100%;
  display: ${({ isSuccess }) => (isSuccess ? `none` : `flex`)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Response = styled.h2`
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.textTitle};
  font-size: ${({ theme }) => theme.fontSize.h1};
`;
