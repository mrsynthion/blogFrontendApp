import Header from 'components/organisms/Header/Header';
import React from 'react';
import { Wrapper } from './MainPage.styles';

interface Props {}

const MainPage: React.FC<Props> = () => (
  <Wrapper>
    <Header />
  </Wrapper>
);

export default MainPage;
