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
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    signUserFailure: (state) => {
      state.isLoading = false;
      state.error = "Failed";
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure } =
  authSlice.actions;
export default authSlice.reducer;
