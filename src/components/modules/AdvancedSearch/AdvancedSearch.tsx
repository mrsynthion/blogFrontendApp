import AdvancedSearchItem from 'components/atoms/AdvancedSearchItem/AdvancedSearchItem';
import React, { useEffect, useState } from 'react';
import { Triangle, Button, Wrapper } from './AdvancedSearch.styled';
interface Props {
  Placeholder: string;
}

const AdvancedSearch: React.FC<Props> = ({ Placeholder }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>
        {Placeholder}
        <Triangle />
      </Button>
      <Wrapper active={isActive}>
        <AdvancedSearchItem label="title" />
        <AdvancedSearchItem label="description" />
        <AdvancedSearchItem label="tags" />
      </Wrapper>
    </>
  );
};

export default AdvancedSearch;
