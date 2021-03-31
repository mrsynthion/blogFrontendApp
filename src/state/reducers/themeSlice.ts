import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: false,
};

export const themeState = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { changeTheme } = themeState.actions;
export const selectTheme = (state: RootState) => state.dark;
export default themeState.reducer;
