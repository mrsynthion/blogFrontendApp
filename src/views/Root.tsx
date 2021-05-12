import { lightTheme, darkTheme } from 'styles/Theme';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'state/hooks/hooks';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MainPage, { Post } from './MainPage/MainPage';
import { DefaultTheme } from 'styled-components';
import FormPage from './FormPage/FormPage';
import axios from 'axios';
import ArticlePage from './ArticlePage/AriclePage';

const Root: React.FC = () => {
  const isDark: boolean = useAppSelector((state) => state.changeTheme.dark);
  let Theme: DefaultTheme = isDark ? darkTheme : lightTheme;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('http://192.168.1.10:3000/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <MainTemplate Theme={Theme}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/MainPage" render={() => <Redirect to="/" />} />
          <Route path="/AddArticle" component={FormPage} />
          <Route
            path="/addarticle"
            render={() => <Redirect to="/AddArticle" />}
          />
          {posts.map((post: Post) => {
            const Path = '/posts' + post.id;
            console.log(Path);
            return (
              <Route
                exact
                path={Path}
                render={() => <ArticlePage post={post} />}
                key={post.id}
              />
            );
          })}
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
