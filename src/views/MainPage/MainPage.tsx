import AdvancedSearch from 'components/modules/AdvancedSearch/AdvancedSearch';
import SearchInput from 'components/modules/SearchInput/SearchInput';
import Header from 'components/organisms/Header/Header';
import React from 'react';
import { Wrapper } from './MainPage.styles';

interface Props {}

const MainPage: React.FC<Props> = () => (
  <Wrapper>
    <Header />
    <SearchInput />
    <AdvancedSearch Placeholder="Advanced search" />
  </Wrapper>
);

export default MainPage;
