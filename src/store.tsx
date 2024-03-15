import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here (replace with your actual reducers)
import authReducer from './redux/authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
