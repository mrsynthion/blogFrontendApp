import { tagsToArray } from 'components/services/tagsToArray/tagsToArray';
import { Types } from 'Enums/FormInputTypesEnum/FormInputTypesEnum';
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'state/hooks/hooks';
import { changeArticleFormState } from 'state/reducers/articleForm';
import { Input, TextArea } from './FormInput.styled';

interface Props {
  placeholder: string;
  type: string;
  isClicked?: boolean;
}

const FormInput: React.FC<Props> = ({ placeholder, type, isClicked }) => {
  const articleFormState = useAppSelector(
    (state) => state.changeArticleFormState
  );
  const dispatch = useAppDispatch();

  const [obj, setObj] = useState(articleFormState);
  useEffect(() => {
    dispatch(changeArticleFormState(obj));
    // eslint-disable-next-line
  }, [obj]);

  switch (type) {
    case Types.Title:
      return (
        <Input
          placeholder={placeholder}
          onChange={(e) =>
            setObj({ ...articleFormState, articleTitle: e.target.value })
          }
          value={isClicked ? '' : articleFormState.articleTitle}
        />
      );
    case Types.Description:
      return (
        <TextArea
          placeholder={placeholder}
          onChange={(e) =>
            setObj({ ...articleFormState, articleDescription: e.target.value })
          }
          value={isClicked ? '' : articleFormState.articleDescription}
        />
      );
    case Types.Tags:
      return (
        <Input
          placeholder={placeholder}
          onChange={(e) =>
            setObj({
              ...articleFormState,
              articleTags: tagsToArray(e.target.value),
            })
          }
          value={isClicked ? '' : articleFormState.articleTags}
        />
      );
    default:
      return <h3>Failed to load input</h3>;
  }
};

export default FormInput;
