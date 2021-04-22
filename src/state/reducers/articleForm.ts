import { createSlice } from '@reduxjs/toolkit';

interface articleFormStateInterface {
  articleTitle: string;
  articleDescription: string;
  articleTags: Array<string>;
}
interface changeAction {
  type: string;
  payload: {
    articleTitle: string;
    articleDescription: string;
    articleTags: Array<string>;
  };
}
const initialState: articleFormStateInterface = {
  articleTitle: '',
  articleDescription: '',
  articleTags: [],
};

export const articleFormState = createSlice({
  name: 'articleForm',
  initialState,
  reducers: {
    changeArticleFormState: (
      state: articleFormStateInterface,
      obj: changeAction
    ) => {
      state.articleTitle = obj.payload.articleTitle;
      state.articleDescription = obj.payload.articleDescription;
      state.articleTags = obj.payload.articleTags;
    },
  },
});

export const { changeArticleFormState } = articleFormState.actions;

export default articleFormState.reducer;
