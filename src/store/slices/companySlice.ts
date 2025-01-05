/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userCompanies: {},
};

const companySlice = createSlice({
  name: "companySlice",
  initialState,
  reducers: {
    setCompaniesForUser: (state, action: PayloadAction<any>) => {
      const { data } = action.payload;
      state.userCompanies = {
        ...state.userCompanies,
        userCompanies: data,
      };
    },
  },
});

export const { setCompaniesForUser } = companySlice.actions;
export default companySlice.reducer;
