import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PersonInfoParagraph = styled.p`
  color: ${({ theme }) => theme.colors.textTitle};
  margin-left: 20px;
  font-size: ${({ theme }) => theme.fontSize.h3};
`;
