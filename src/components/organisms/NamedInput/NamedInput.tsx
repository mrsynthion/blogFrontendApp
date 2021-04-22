import React from 'react';
import FormInput from 'components/atoms/FormInput/FormInput';
import Title from 'components/atoms/Title/Title';
import { Wrapper } from './NamedInput.styled';

interface Props {
  title: string;
  placeholder: string;
  type: string;
  isClicked: boolean;
}

const NamedInput: React.FC<Props> = ({
  title,
  placeholder,
  type,
  isClicked,
}) => {
  return (
    <Wrapper>
      <Title isSmall>{title}</Title>
      <FormInput type={type} placeholder={placeholder} isClicked={isClicked} />
    </Wrapper>
  );
};

export default NamedInput;
