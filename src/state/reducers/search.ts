import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
  title: boolean;
  description: boolean;
  tags: boolean;
}
interface changeAction {
  type: string;
  payload: {
    value: string;
    title: any;
    description: any;
    tags: any;
  };
}
const initialState: SearchState = {
  value: '',
  title: false,
  description: false,
  tags: false,
};

export const searchState = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchState: (state: SearchState, obj: changeAction) => {
      state.value = obj.payload.value;
      state.title = obj.payload.title;
      state.description = obj.payload.description;
      state.tags = obj.payload.tags;
    },
  },
});

export const { changeSearchState } = searchState.actions;

export default searchState.reducer;
