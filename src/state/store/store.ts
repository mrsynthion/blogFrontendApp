import { configureStore } from '@reduxjs/toolkit';
import changeTheme from '../reducers/themeSlice';
import changeSearchState from '../reducers/search';

export const store = configureStore({
  reducer: { changeTheme, changeSearchState },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
