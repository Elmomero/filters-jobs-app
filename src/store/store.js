import { configureStore } from "@reduxjs/toolkit";
import tagReducer from "../reducers/tagSlice";
import jobReducer from "../reducers/jobsSlice";
export default configureStore({
  reducer: {
    tags: tagReducer,
    jobs: jobReducer,
  },
});
