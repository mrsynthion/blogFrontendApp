import styled from 'styled-components';

const ArticleTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.h3};
  color: ${({ theme }) => theme.colors.textTitle};
`;

export default ArticleTitle;
