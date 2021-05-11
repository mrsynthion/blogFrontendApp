import AdvancedSearchItem from 'components/atoms/AdvancedSearchItem/AdvancedSearchItem';
import React, { useState } from 'react';
import {
  Triangle,
  Button,
  Wrapper,
  MainWrapper,
} from './AdvancedSearch.styled';
interface Props {
  Placeholder: string;
}

const AdvancedSearch: React.FC<Props> = ({ Placeholder }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <MainWrapper>
      <Button onClick={() => setIsActive(!isActive)}>
        {Placeholder}
        <Triangle />
      </Button>
      <Wrapper active={isActive}>
        <AdvancedSearchItem label="title" />
        <AdvancedSearchItem label="description" />
        <AdvancedSearchItem label="tags" />
      </Wrapper>
    </MainWrapper>
  );
};

export default AdvancedSearch;
