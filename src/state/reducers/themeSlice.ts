import { createSlice } from '@reduxjs/toolkit';

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
export default themeState.reducer;
