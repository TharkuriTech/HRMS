// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  name: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.email = null;
      state.name = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
