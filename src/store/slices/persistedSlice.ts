/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userLoginData: {
    token: string | null;
    userInfo: object;
    isAuthenticated: boolean;
    isComplianceOfficer: boolean;
    isNewUser: boolean;
  };
}

const initialState: UserState = {
  userLoginData: {
    token: null,
    userInfo: {},
    isAuthenticated: false,
    isComplianceOfficer: false,
    isNewUser: false,
  },
};

const persistedSlice = createSlice({
  name: "persistedSlice",
  initialState,
  reducers: {
    setUserLoginData: (state, action: PayloadAction<any>) => {
      const { token, data, isNewUser } = action.payload;
      const { personalInfo: { isComplianceOfficer = false } = {} } = data;
      
      state.userLoginData = {
        ...state.userLoginData,
        token: token,
        userInfo: data,
        isAuthenticated: false,
        isComplianceOfficer,
        isNewUser,
      };
    },
  },
});

export const { setUserLoginData } = persistedSlice.actions;
export default persistedSlice.reducer;
