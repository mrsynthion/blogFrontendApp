import React from 'react';
import FormInput from 'components/atoms/FormInput/FormInput';
import Title from 'components/atoms/Title/Title';
import { Wrapper } from './NamedInput.styled';

interface Props {
  title: string;
  placeholder: string;
  type: string;
}

const NamedInput: React.FC<Props> = ({ title, placeholder, type }) => {
  return (
    <Wrapper>
      <Title isSmall>{title}</Title>
      <FormInput type={type} placeholder={placeholder} />
    </Wrapper>
  );
};

export default NamedInput;
