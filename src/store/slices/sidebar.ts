import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISidebarState {
  activeElement: number;
}

const initialState: ISidebarState = {
  activeElement: 0,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActiveElement(state, action: PayloadAction<number>) {
      state.activeElement = action.payload;
    },
  },
});

export const { setActiveElement } = sidebarSlice.actions;

export default sidebarSlice.reducer;
