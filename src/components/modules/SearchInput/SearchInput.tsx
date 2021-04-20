import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'state/hooks/hooks';
import { changeSearchState } from 'state/reducers/search';
import { Wrapper } from './SearchInput.styled';

interface Props {}

const SearchInput: React.FC<Props> = () => {
  const searchState = useAppSelector((state) => state.changeSearchState);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(searchState.value);

  const [obj, setObj] = useState(
    useAppSelector((state) => state.changeSearchState)
  );
  useEffect(() => {
    setObj({
      ...searchState,
      value,
    });
  }, [searchState, value]);
  return (
    <Wrapper
      placeholder="Search"
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={(e) =>
        e.key === 'Enter' ? dispatch(changeSearchState(obj)) : null
      }
    />
  );
};

export default SearchInput;
