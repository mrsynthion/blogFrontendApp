import Header from 'components/organisms/Header/Header';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Post } from 'views/MainPage/MainPage';

import {
  ArticleWrapper,
  Description,
  ExitButton,
  Tags,
  Title,
  Wrapper,
} from './ArticlePage.styled';

interface Props {
  post: Post;
}

const ArticlePage: React.FC<Props> = ({ post }) => {
  return (
    <Wrapper>
      <Header />
      <ArticleWrapper>
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
        <Tags>Tags: {post.tags}</Tags>
        <ExitButton as={NavLink} to="/">
          Powrót
        </ExitButton>
      </ArticleWrapper>
    </Wrapper>
  );
};
export default ArticlePage;
