import { createSlice } from "@reduxjs/toolkit";
import jobs from "../data/data.json";
const initialState = jobs.map((job) => ({
  ...job,
  tags: [job.role, job.level, ...job.languages, ...job.tools],
}));
export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterJobs: (state, { payload=[] }) => {
      if(payload.length === 0) return initialState  
      return initialState.filter((job) => {
        let isIncluded = true;
        payload.forEach(({tag}) => {
          isIncluded = job.tags.includes(tag);
          if (!isIncluded) return;
        });
        return isIncluded;
      });
    },
    resetJobs:() => initialState
    
  },
});
export const {filterJobs,resetJobs} = jobsSlice.actions
export default jobsSlice.reducer 
