import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    toggleTag: (state, { payload }) => {
      let exist = state.includes(payload);
      if (!exist) {
        state.push(payload);
      } else {
        state = state.filter((tag) => tag !== payload);
      }
      return state;
    },
    clearTag: (state) => {
      state = [];
      return state;
    },
    removeTag: (state, { payload }) => state.filter((tag) => tag !== payload),
  },
});
export const { toggleTag, clearTag, removeTag } = tagSlice.actions;
export default tagSlice.reducer;
