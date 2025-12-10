import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  roles: [], // dynamic roles here
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, roles } = action.payload;
      state.user = user;
      state.token = token;
      state.roles = roles || [];
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.roles = [];
      state.isAuthenticated = false;
      localStorage.removeItem("auth");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
