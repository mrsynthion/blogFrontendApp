import React from 'react';
import { useAppSelector, useAppDispatch } from 'state/hooks/hooks';
import { changeSearchState } from 'state/reducers/search';
import { Wrapper } from './SearchInput.styled';

interface Props {}

const SearchInput: React.FC<Props> = () => {
  const searchState = useAppSelector((state) => state.changeSearchState);
  const dispatch = useAppDispatch();
  return (
    <Wrapper
      placeholder="Search"
      onChange={(e) =>
        dispatch(changeSearchState({ ...searchState, value: e.target.value }))
      }
    />
  );
};

export default SearchInput;
