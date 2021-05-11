import React from 'react';
import { SearchWrapper } from 'views/MainPage/MainPage.styles';
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch';
import SearchInput from '../SearchInput/SearchInput';
import { PersonInfoParagraph, Wrapper } from './Navigation.styled';

interface Props {}
const Navigation: React.FC<Props> = () => {
  return (
    <Wrapper>
      <PersonInfoParagraph>Blog osobisty</PersonInfoParagraph>
      <SearchWrapper>
        <SearchInput />
        <AdvancedSearch Placeholder="Advanced search" />
      </SearchWrapper>
    </Wrapper>
  );
};

export default Navigation;
