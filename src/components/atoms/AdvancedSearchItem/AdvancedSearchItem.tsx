import React, { useState } from 'react';
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
  if (label === Types.Title) {
  }
  if (label === Types.Description) {
  }
  if (label === Types.Tags) {
  }
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Wrapper>
      <Label htmlFor={label}>{label}</Label>
      <Item
        type="checkbox"
        id={label}
        defaultChecked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      ></Item>
    </Wrapper>
  );
};

export default AdvancedSearchItem;
