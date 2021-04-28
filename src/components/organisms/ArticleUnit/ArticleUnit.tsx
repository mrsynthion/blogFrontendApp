import { textToArray } from 'components/services/textToArray/textToArray';
import React from 'react';
import { Wrapper } from './ArticleUnit.styled';

interface Props {
  id: number;
  title: string;
  text: string;
}
const ArticleUnit: React.FC<Props> = ({ id, title, text }) => {
  const Text = textToArray(text, '.');

  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{Text[0]}.</p>
    </Wrapper>
  );
};

export default ArticleUnit;