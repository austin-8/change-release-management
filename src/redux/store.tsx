import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import layoutReducer from './layoutReducer'; // Import the layout reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer, // Add the layout reducer to the store configuration
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
