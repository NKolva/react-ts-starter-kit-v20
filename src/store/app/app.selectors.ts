import { createSelector } from '@reduxjs/toolkit';
import { type RootState } from 'src/app/rootStore';

const getState = (state: RootState) => state.app;

export const postsDataSelector = createSelector(getState, (state) => state.posts);
export const isLoadingPostsSelector = createSelector(getState, (state) => state.isLoadingPosts);
