import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'state/hooks/hooks';
import { changeSearchState } from 'state/reducers/search';
import { Wrapper, Item, Label } from './AdvancedSearchItem.styled';

interface Props {
  label: string;
}
enum Types {
  Title = 'title',
  Description = 'description',
  Tags = 'tags',
}

const AdvancedSearchItem: React.FC<Props> = ({ label }) => {
  const searchState = useAppSelector((state) => state.changeSearchState);
  const dispatch = useAppDispatch();

  let stat;

  switch (label) {
    case Types.Title:
      stat = true;
      break;
    default:
      stat = false;
      break;
  }

  const [isChecked, setIsChecked] = useState(stat);

  const [obj, setObj] = useState(
    useAppSelector((state) => state.changeSearchState)
  );
  useEffect(() => {
    switch (label) {
      case Types.Title:
        setObj({ ...searchState, title: isChecked });
        break;
      case Types.Description:
        setObj({ ...searchState, description: isChecked });
        break;
      case Types.Tags:
        setObj({ ...searchState, tags: isChecked });
        break;
      default:
        return undefined;
    }
  }, [label, isChecked, searchState]);

  useEffect(() => {
    dispatch(changeSearchState(obj));
  }, [obj, dispatch]);
  console.log(obj);
  return (
    <Wrapper>
      <Label htmlFor={label}>{label}</Label>
      <Item
        type="checkbox"
        id={label}
        defaultChecked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      ></Item>
    </Wrapper>
  );
};

export default AdvancedSearchItem;
