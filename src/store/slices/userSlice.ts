import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";

interface UserState {
  user: IUser;
  accountNumber: string;
}

const initialState: UserState = {
  user: {
    all_trades: [],
    balance: 0,
    pl: 0,
    withdrawal: 0,
    detailed_trades: [],
  },
  accountNumber: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setAccount(state, action) {
      state.accountNumber = action.payload;
    },
  },
});

export const { setUser, setAccount } = userSlice.actions;

export default userSlice.reducer;
