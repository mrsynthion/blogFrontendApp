import AddArticleForm from 'components/organisms/AddArticleForm/AddArticleForm';
import Foot from 'components/organisms/Footer/Foot';
import Header from 'components/organisms/Header/Header';
import React from 'react';
import { Wrapper } from './FormPage.styled';

const FormPage: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <AddArticleForm />
      </Wrapper>
      <Foot />
    </>
  );
};

export default FormPage;
