import { createSlice } from '@reduxjs/toolkit';

import { type InitialStateProps } from './types';
import { fetchPosts } from './app.actions';

const initialState: InitialStateProps = {
  posts: [],
  isLoadingPosts: false
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearAppState: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoadingPosts = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoadingPosts = false;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoadingPosts = false;
    });
  }
});

export const { clearAppState } = appSlice.actions;

export default appSlice.reducer;
