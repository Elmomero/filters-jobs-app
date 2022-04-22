import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetJobs } from "../reducers/jobsSlice";
import { clearTag } from "../reducers/tagSlice";
import { JobsFilter } from "./JobsFilter";

export const JobsFilters = () => {
  const objectTags = useSelector((store) => store.tags);
  const dispatch = useDispatch();
  return (
    <article className="jobs-section">
      <section className="jobs-filters">
        {objectTags.map(({ tag }) => (
          <JobsFilter key={tag} tag={tag} />
        ))}
      </section>
      <button
        className="clear-filters-button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(clearTag());
          dispatch(resetJobs())
        }}
      >
        Clear
      </button>
    </article>
  );
};
