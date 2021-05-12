import axios from 'axios';
import Navigation from 'components/modules/Navigation/Navigation';
import ArticleUnit from 'components/organisms/ArticleUnit/ArticleUnit';
import Foot from 'components/organisms/Footer/Foot';
import Header from 'components/organisms/Header/Header';
import { postFilter } from 'components/services/postFilter/postFilter';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'state/hooks/hooks';
import { PostsWrapper, Wrap, Wrapper } from './MainPage.styles';

interface Props {}
export interface Post {
  title: string;
  description: string;
  id: number;
  tags: string;
}

const MainPage: React.FC<Props> = () => {
  const [posts, setIsPosts] = useState([]);
  const isTitle = useAppSelector((state) => state.changeSearchState.title);
  const isDescription = useAppSelector(
    (state) => state.changeSearchState.description
  );
  const isTags = useAppSelector((state) => state.changeSearchState.tags);
  const searchValue = useAppSelector((state) => state.changeSearchState.value);
  useEffect(() => {
    axios
      .get('http://192.168.1.10:3000/posts')
      .then((res) => {
        setIsPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);

  return (
    <Wrap>
      <Wrapper>
        <Header />
        <Navigation />
        <PostsWrapper length={posts.length}>
          {posts.length !== 0
            ? posts.map((post: Post) => {
                if (searchValue.length !== 0) {
                  const filteredPost = postFilter(
                    isTitle,
                    isDescription,
                    isTags,
                    searchValue,
                    post
                  );
                  if (filteredPost) {
                    return (
                      <ArticleUnit
                        title={filteredPost.title}
                        text={filteredPost.description}
                        id={filteredPost.id}
                        key={filteredPost.id}
                        tags={filteredPost.tags}
                      />
                    );
                  }
                } else {
                  return (
                    <ArticleUnit
                      title={post.title}
                      text={post.description}
                      id={post.id}
                      key={post.id}
                      tags={post.tags}
                    />
                  );
                }
                return null;
              })
            : null}
        </PostsWrapper>
      </Wrapper>
      <Foot />
    </Wrap>
  );
};

export default MainPage;
