import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConsultant } from "../../types/consultant";

interface ConsultantState {
  consultant: IConsultant;
}

const initialState: ConsultantState = {
  consultant: {
    id: 0,
    accessCode: "",
    imageUrl: null,
    lastName: "",
    surname: "",
    earningsPerMonth: 0,
    email: "",
    level: 0,
    masterName: "",
    name: "",
    ownConsultants: 0,
    ownEarnings: 0,
    structureEarnings: 0,
    activeAccount: 0,
    users: [],
  },
};

const consultantSlice = createSlice({
  name: "consultant",
  initialState,
  reducers: {
    setConsultant(state, action: PayloadAction<IConsultant>) {
      state.consultant = action.payload;
    },
  },
});

export const { setConsultant } = consultantSlice.actions;

export default consultantSlice.reducer;
