import React from 'react';
import Title from 'components/atoms/Title/Title';
import { Wrapper } from './Header.styles';
import Switcher from 'components/modules/Switcher/Switcher';

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper>
    <Title>Tytuł bloga</Title>
    <Switcher />
  </Wrapper>
);

export default Header;
