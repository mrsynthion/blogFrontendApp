import { configureStore } from '@reduxjs/toolkit';
import changeTheme from '../reducers/themeSlice';

export const store = configureStore({
  reducer: changeTheme,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
