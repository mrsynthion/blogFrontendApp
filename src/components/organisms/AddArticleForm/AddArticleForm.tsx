import FormInput from 'components/atoms/FormInput/FormInput';
import React from 'react';
import Header from '../Header/Header';
import NamedInput from '../NamedInput/NamedInput';
import { Wrapper } from './AddArticleForm.styled';

interface Props {}

const AddArticleForm: React.FC<Props> = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <NamedInput title="Article title" placeholder="Article title" />
        <FormInput placeholder="siems" />
      </Wrapper>
    </>
  );
};

export default AddArticleForm;
