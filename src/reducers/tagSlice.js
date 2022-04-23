import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    toggleTag: (state, { payload }) => {
      let existTag = false,
        existType = false;
      state.forEach((objectTag) => {
        if (objectTag.tag === payload.tag) existTag = true;
        if (
          objectTag.type === payload.type &&
          objectTag.type !== "tools-languages"
        )
          existType = true;
      });

      if (!existTag && !existType) {
        state.push({ type: payload.type, tag: payload.tag });
      } else if (existTag) {
        state = state.filter(({ tag }) => tag !== payload.tag);
      } else if (existType) {
        state = state.filter(({ type }) => type !== payload.type);
        state.push({ type: payload.type, tag: payload.tag });
      } 

      return state;
    },
    clearTag: (state) => {
      state = [];
      return state;
    },
    removeTag: (state, { payload }) =>
      state.filter(({ tag }) => tag !== payload),
  },
});
export const { toggleTag, clearTag, removeTag } = tagSlice.actions;
export default tagSlice.reducer;
