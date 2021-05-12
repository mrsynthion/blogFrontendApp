import { Post } from 'views/MainPage/MainPage';

export const postFilter = (
  isTitle: boolean,
  isDescription: boolean,
  isTags: boolean,
  value: string,
  post: Post
) => {
  if (isTitle && isDescription && isTags) {
    if (
      post.title.toLowerCase().includes(value.toLowerCase()) ||
      post.description.toLowerCase().includes(value.toLowerCase()) ||
      post.tags.toLowerCase().includes(value.toLowerCase())
    ) {
      return post;
    }
  } else if (isTitle && isDescription) {
    if (
      post.title.toLowerCase().includes(value.toLowerCase()) ||
      post.description.toLowerCase().includes(value.toLowerCase())
    ) {
      return post;
    }
  } else if (isTitle && isTags) {
    if (
      post.title.toLowerCase().includes(value.toLowerCase()) ||
      post.tags.toLowerCase().includes(value.toLowerCase())
    ) {
      return post;
    }
  } else if (isDescription && isTags) {
    if (
      post.description.toLowerCase().includes(value.toLowerCase()) ||
      post.tags.toLowerCase().includes(value.toLowerCase())
    ) {
      return post;
    }
  } else if (isTitle) {
    if (post.title.toLowerCase().includes(value.toLowerCase())) {
      return post;
    }
  } else if (isDescription) {
    if (post.description.toLowerCase().includes(value.toLowerCase())) {
      return post;
    }
  } else if (isTags) {
    if (post.tags.toLowerCase().includes(value.toLowerCase())) {
      return post;
    }
  }
};
