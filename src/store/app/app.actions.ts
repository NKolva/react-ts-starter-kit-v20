import { createAsyncThunk } from '@reduxjs/toolkit';
import { postsApi } from 'src/api/posts';

export const fetchPosts = createAsyncThunk('', async () => {
  try {
    const response = await postsApi.fetchPosts();

    console.log('fetchPosts[response]', response);

    return response.data;
  } catch (error) {
    console.warn('fetchPosts[error]', error);
  }
});
