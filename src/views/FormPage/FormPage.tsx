import AddArticleForm from 'components/organisms/AddArticleForm/AddArticleForm';
import Header from 'components/organisms/Header/Header';
import React from 'react';
import { Wrapper } from './FormPage.styled';

const FormPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <AddArticleForm />
    </Wrapper>
  );
};

export default FormPage;
