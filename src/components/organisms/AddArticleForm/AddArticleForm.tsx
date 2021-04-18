import React from 'react';
import NamedInput from '../NamedInput/NamedInput';
import { Wrapper } from './AddArticleForm.styled';

interface Props {}

const AddArticleForm: React.FC<Props> = () => {
  return (
    <>
      <Wrapper>
        <NamedInput
          title="Article title"
          placeholder="Article title"
          type="title"
        />
      </Wrapper>
    </>
  );
};

export default AddArticleForm;
