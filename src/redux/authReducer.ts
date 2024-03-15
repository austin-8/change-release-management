import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  userInfo?: {
    // Add user information properties here (e.g., name, email)
    name?: string;
    email?: string;
  };
}

const initialState: AuthState = {
  isLoggedIn: true,
  userInfo: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload; // Update user information
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
