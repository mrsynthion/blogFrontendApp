import { lightTheme, darkTheme } from 'styles/Theme';
import React from 'react';
import { useAppSelector } from 'state/hooks/hooks';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import MainPage from './MainPage/MainPage';
import { DefaultTheme } from 'styled-components';

const Root: React.FC = () => {
  const isDark: boolean = useAppSelector((state) => state.changeTheme.dark);
  let Theme: DefaultTheme = isDark ? darkTheme : lightTheme;

  return (
    <BrowserRouter>
      <MainTemplate Theme={Theme}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/MainPage" render={() => <Redirect to="/" />} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
