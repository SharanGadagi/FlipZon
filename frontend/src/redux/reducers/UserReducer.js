import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = false;
  },

  LoadUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payload;
  },

  LoadUserFail: (state, action) => {
    state.isAuthenticated = false;
    state.loading = false;
    state.error = action.payload;
  },
  Clear: (state) => {
    state.error = null;
  },
});
