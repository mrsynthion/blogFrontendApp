import axios from 'axios';
import Navigation from 'components/modules/Navigation/Navigation';
import ArticleUnit from 'components/organisms/ArticleUnit/ArticleUnit';
import Header from 'components/organisms/Header/Header';
import React, { useEffect, useState } from 'react';
import { PostsWrapper, Wrapper } from './MainPage.styles';

interface Props {}
interface Post {
  title: string;
  description: string;
  id: number;
}

const MainPage: React.FC<Props> = () => {
  const [posts, setIsPosts] = useState([]);
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
    <Wrapper>
      <Header />
      <Navigation />
      <PostsWrapper length={posts.length}>
        {posts.length !== 0
          ? posts.map((post: Post) => {
              return (
                <ArticleUnit
                  title={post.title}
                  text={post.description}
                  id={post.id}
                  key={post.id}
                />
              );
            })
          : null}
      </PostsWrapper>
    </Wrapper>
  );
};

export default MainPage;
