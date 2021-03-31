import React from 'react';
import Title from 'components/atoms/Title/Title';
import { Wrapper } from './Header.styles';
import Slider from 'components/modules/Slider/Slider';

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper>
    <Title>Tytuł bloga</Title>
    <Slider />
  </Wrapper>
);

export default Header;
