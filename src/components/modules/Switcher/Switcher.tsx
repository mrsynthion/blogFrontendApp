import React from 'react';
import { useAppSelector, useAppDispatch } from 'state/hooks/hooks';
import { changeTheme } from 'state/reducers/themeSlice';
import { Wrapper, Rectangle } from './Switcher.styles';

const Switcher: React.FC = () => {
  const isDark = useAppSelector((state) => state.changeTheme.dark);
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

export default Switcher;
