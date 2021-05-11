import styled from 'styled-components';
interface Props {
  isArticle?: boolean;
}

const ArticleTitle = styled.h3<Props>`
  font-size: ${({ theme }) => theme.fontSize.h3};
  color: ${({ theme, isArticle }) =>
    isArticle ? theme.colors.textLink : theme.colors.textTitle};
  text-align: center;
  padding: 10px;
`;

export default ArticleTitle;
