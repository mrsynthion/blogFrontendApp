import React from 'react';
import { useAppSelector, useAppDispatch } from 'state/hooks/hooks';
import { changeTheme } from 'state/reducers/themeSlice';
import { Wrapper, Rectangle } from './Slider.styles';

const Slider: React.FC = () => {
  const isDark = useAppSelector((state) => state.dark);
  const dispatch = useAppDispatch();

  return (
    <Wrapper clicked={isDark}>
      <Rectangle
        aria-label="Switch between light and dark mode"
        onClick={() => dispatch(changeTheme())}
        clicked={isDark}
      />
    </Wrapper>
  );
};

export default Slider;
