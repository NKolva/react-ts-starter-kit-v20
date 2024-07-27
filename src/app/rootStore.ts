import { type compose, configureStore } from '@reduxjs/toolkit';

import appReducer from 'src/store/app';

export const rootStore = configureStore({
  reducer: {
    app: appReducer
  }
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
