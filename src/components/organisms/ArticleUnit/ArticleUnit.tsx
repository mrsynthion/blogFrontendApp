import ArticleTitle from 'components/atoms/ArticleTitle/ArticleTitle';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { textToArray } from 'components/services/textToArray/textToArray';
import React from 'react';
import { Tags, Wrapper, StyledNavLink } from './ArticleUnit.styled';

interface Props {
  id: number;
  title: string;
  text: string;
  tags: string;
}

const ArticleUnit: React.FC<Props> = ({ id, title, text, tags }) => {
  const Text = textToArray(text, '.');
  const Path = '/posts' + id;

  return (
    <Wrapper>
      <StyledNavLink to={Path}>
        <ArticleTitle isArticle>{title}</ArticleTitle>
      </StyledNavLink>
      <Paragraph>{Text[0]},</Paragraph>
      <Paragraph>{Text[1]}.</Paragraph>
      <Tags>Tags: {tags}</Tags>
    </Wrapper>
  );
};

export default ArticleUnit;
