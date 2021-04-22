import { configureStore } from '@reduxjs/toolkit';
import changeTheme from '../reducers/themeSlice';
import changeSearchState from '../reducers/search';
import changeArticleFormState from '../reducers/articleForm';

export const store = configureStore({
  reducer: { changeTheme, changeSearchState, changeArticleFormState },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
