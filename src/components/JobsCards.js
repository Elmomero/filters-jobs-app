import React from 'react'
import jobs from "../data/data.json";
import { JobCard } from './JobCard';

export const JobsCards = () => {
  return (
    <section className="jobs-container">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
  )
}
