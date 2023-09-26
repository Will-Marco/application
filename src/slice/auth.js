import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // LOGIN
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    loginUserFailure: (state) => {
      state.isLoading = false;
      state.error = "Login failed";
    },
    // REGISTER
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    registerUserFailure: (state) => {
      state.isLoading = false;
      state.error = "Register failed";
    },
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
