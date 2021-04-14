import React from 'react';
import FormInput from 'components/atoms/FormInput/FormInput';
import Title from 'components/atoms/Title/Title';
import { Wrapper } from './NamedInput.styled';

interface Props {
  title: string;
  placeholder: string;
}

const NamedInput: React.FC<Props> = ({ title, placeholder }) => {
  return (
    <Wrapper>
      <Title isSmall>{title}</Title>
      <FormInput placeholder={placeholder} />
    </Wrapper>
  );
};

export default NamedInput;
