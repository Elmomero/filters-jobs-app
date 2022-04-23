import { createSlice } from "@reduxjs/toolkit";
import jobs from "../data/data.json";
import { isSubArray } from "../helpers/isSubArray";
const initialState = jobs.map((job) => ({
  ...job,
  tags: [job.role, job.level, ...job.languages, ...job.tools],
}));
export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterJobs: (state, { payload }) => {
      if (payload.length === 0) return initialState;
      return initialState.filter((job) => {
        let a = [],
            b = job.tags;
        payload.forEach(({ tag }) => {
          a.push(tag);
        });
        return isSubArray(a,b)
      });
    },
    resetJobs: () => initialState,
  },
});
export const { filterJobs, resetJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
