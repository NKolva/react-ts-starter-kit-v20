import { apiClient } from './apiClient';

const fetchPosts = async () => {
  return await apiClient.get('/posts');
};

export const postsApi = { fetchPosts };
