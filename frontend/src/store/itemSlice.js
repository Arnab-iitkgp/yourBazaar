import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: null,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setSelectedItem(state, action) {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = itemSlice.actions;
export default itemSlice;
