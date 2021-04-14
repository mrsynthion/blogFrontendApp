import React from 'react';
import { Input } from './FormInput.styled';

interface Props {
  placeholder: string;
}

const FormInput: React.FC<Props> = ({ placeholder }) => {
  return (
    <>
      <Input placeholder={placeholder} />
    </>
  );
};

export default FormInput;
