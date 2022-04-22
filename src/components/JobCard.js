import React from "react";
import { useDispatch } from "react-redux";
import { toggleTag } from "../reducers/tagSlice";
export const JobCard = ({ job }) => {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;
  // const selectedTags = useSelector((store)=> store.tags)
  const dispatch = useDispatch();

  const tags = [role, level, ...languages, ...tools];

  const objectTags = tags.map((tag, i) => {
    if (i === 0) return { type: "role", tag };
    else if (i === 1) return { type: "level", tag };
    else return { type: "tools-languages", tag };
  });

  return (
    <div className="job-card">
      <img className="company-logo" src={logo} alt="enterprice logo" />
      <article className="job-info">
        <div className="job-data">
          <p className="company-name">{company}</p>
          {isNew && <p className="tag">new!</p>}
          {featured && <p className={`tag featured`}>featured</p>}
        </div>
        <h3 className="position-text">{position}</h3>
        <div className="job-specifications">
          <p className="job-specification">{postedAt}</p>
          <p className="job-specification">{contract}</p>
          <p className="job-specification">{location}</p>
        </div>
      </article>
      <section className="job-requirenments">
        {objectTags.map((objectTag) => (
          <div
            className="job-tags"
            key={objectTag.tag}
            role="button"
            onClick={() => dispatch(toggleTag(objectTag))}
          >
            {objectTag.tag}
          </div>
        ))}
      </section>
    </div>
  );
};
