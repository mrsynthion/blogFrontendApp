import ArticleTitle from 'components/atoms/ArticleTitle/ArticleTitle';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 60%;
  margin: auto;
  height: 100vh;
`;
export const ArticleWrapper = styled.div`
  height: 80%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled(ArticleTitle)`
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.textLink};
`;

export const Description = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.h3};
`;

export const Tags = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.textLink};
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-style: italic;
`;

export const ExitButton = styled.button`
  outline: none;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.opposite};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.colors.textLink};
  place-self: center;
  text-align: center;
  text-decoration: none;
  padding: 1%;
`;
