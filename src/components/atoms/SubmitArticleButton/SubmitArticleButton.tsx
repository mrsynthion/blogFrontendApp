import React from 'react';
import { Button } from './SubmitArticleButton.styled';

interface Props {
  placeholder: string;
  action?: () => void;
}

const SubmitArticleButton: React.FC<Props> = ({ placeholder, action }) => {
  return <Button onClick={action}>{placeholder}</Button>;
};
export default SubmitArticleButton;
