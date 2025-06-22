import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserReducerInitialState } from "../../types/reducer-types";
import { User } from "../../types/types";

const initialState: UserReducerInitialState = {
  user: null,
  token: null, // ✅ Add token to state
  loading: true,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    },
    userExist: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
    },
    userNotExist: (state) => {
      state.user = null;
      state.token = null; // ✅ Clear token on logout
      state.loading = false;
    },
  },
});

export const { loginSuccess, userExist, userNotExist } = userReducer.actions;
