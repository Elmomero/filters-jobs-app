import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterJobs } from "../reducers/jobsSlice";
// import jobs from "../data/data.json";
import { JobCard } from "./JobCard";

export const JobsCards = () => {
  const jobs = useSelector((store) => store.jobs);
  const tags = useSelector((store) => store.tags);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterJobs(tags));
  }, [tags, dispatch]);

  return (
    <section className="jobs-container">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
};
