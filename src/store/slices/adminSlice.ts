import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConsultant } from "../../types/consultant";

interface IAdminState {
  consultant: IConsultant | null;
}

const initialState: IAdminState = {
  consultant: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    updateLatestConsultant(state, action: PayloadAction<IConsultant>) {
      state.consultant = action.payload;
    },
  },
});

export const { updateLatestConsultant } = adminSlice.actions;

export default adminSlice.reducer;
