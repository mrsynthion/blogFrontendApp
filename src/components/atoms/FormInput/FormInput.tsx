import React from 'react';
import { Input } from './FormInput.styled';

enum Types {
  Title = 'title',
  Description = 'description',
  Tags = 'tags',
}
interface Props {
  placeholder: string;
  type: string;
}

const FormInput: React.FC<Props> = ({ placeholder, type }) => {
  switch (type) {
    case Types.Title:
      return (
        <>
          <Input placeholder={placeholder} />
        </>
      );

    default:
      return <h1>siema</h1>;
  }
};

export default FormInput;
