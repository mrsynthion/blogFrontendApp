import React, { useState } from 'react';
import axios from 'axios';
import SubmitArticleButton from 'components/atoms/SubmitArticleButton/SubmitArticleButton';
import { Types } from 'Enums/FormInputTypesEnum/FormInputTypesEnum';
import NamedInput from '../NamedInput/NamedInput';
import { Response, Wrapper } from './AddArticleForm.styled';
import { useAppDispatch, useAppSelector } from 'state/hooks/hooks';
import { changeArticleFormState } from 'state/reducers/articleForm';

interface Props {}

const AddArticleForm: React.FC<Props> = () => {
  const post = useAppSelector((state) => state.changeArticleFormState);
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendPosts = (post: any) => {
    axios
      .post('http://192.168.1.7:3000/tryMakeNewPost', {
        title: post.articleTitle,
        description: post.articleDescription,
        tags: post.articleTags.join(','),
      })
      .then((res) => {
        setIsSuccess(true);
        dispatch(
          changeArticleFormState({
            articleTitle: '',
            articleDescription: '',
            articleTags: [],
          })
        );
        console.log(res.data);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  };
  return (
    <>
      <Wrapper isSuccess={isSuccess}>
        <NamedInput
          title="Article title"
          placeholder="Article title"
          type={Types.Title}
          isClicked={isSuccess}
        />
        <NamedInput
          title="Description"
          placeholder="Main text"
          type={Types.Description}
          isClicked={isSuccess}
        />
        <NamedInput
          title="Tags"
          placeholder="Tags"
          type={Types.Tags}
          isClicked={isSuccess}
        />
        <SubmitArticleButton
          placeholder="Submit"
          action={() => sendPosts(post)}
        />
        {isError ? <Response>Failed to submit the article</Response> : null}
      </Wrapper>
      {isSuccess ? (
        <Wrapper>
          <Response>Your article has been added successfully.</Response>
          <SubmitArticleButton
            placeholder="Add new article"
            action={() => setIsSuccess(false)}
          />
        </Wrapper>
      ) : null}
    </>
  );
};
export default AddArticleForm;
