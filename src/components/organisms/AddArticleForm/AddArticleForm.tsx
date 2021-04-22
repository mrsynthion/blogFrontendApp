import React from 'react';
import axios from 'axios';
import SubmitArticleButton from 'components/atoms/SubmitArticleButton/SubmitArticleButton';
import { Types } from 'Enums/FormInputTypesEnum/FormInputTypesEnum';
import NamedInput from '../NamedInput/NamedInput';
import { Wrapper } from './AddArticleForm.styled';
import { useAppSelector } from 'state/hooks/hooks';

interface Props {}

const AddArticleForm: React.FC<Props> = () => {
  const post = useAppSelector((state) => state.changeArticleFormState);
  const sendPosts = () =>
    axios({
      method: 'POST',
      url: 'http://192.168.1.7:3000/tryMakeNewPost',
      data: {
        title: post.articleTitle,
        description: post.articleDescription,
        tags: post.articleTags.join(','),
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  return (
    <>
      <Wrapper>
        <NamedInput
          title="Article title"
          placeholder="Article title"
          type={Types.Title}
        />
        <NamedInput
          title="Description"
          placeholder="Main text"
          type={Types.Description}
        />
        <NamedInput title="Tags" placeholder="Tags" type={Types.Tags} />
        <SubmitArticleButton placeholder="Submit" action={sendPosts} />
      </Wrapper>
    </>
  );
};

export default AddArticleForm;
