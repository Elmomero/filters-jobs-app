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
    <section className="job-card">
      <div className="job-car-left">
        <img className="company-logo" src={logo} alt="enterprice logo" />
        <article className="job-info">
          <div className="job-data">
            <p className="company-name">{company}</p>
            {isNew && <p className="tag">new!</p>}
            {featured && <p className={`tag featured`}>featured</p>}
          </div>
          <h3
            className="position-text"
            onClick={(e) => {
              const cards = document.querySelectorAll(".job-card");
              cards.forEach((card) => {
                card.classList.remove("border-card");
              });
              const parentContainer = e.target.parentNode.parentNode.parentNode;
              parentContainer.classList.add("border-card");
            }}
          >
            {position}
          </h3>
          <div className="job-specifications">
            <p className="job-specification">{postedAt}</p>
            <p className="job-specification">{contract}</p>
            <p className="job-specification">{location}</p>
          </div>
        </article>
      </div>

      <article className="job-requirenments">
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
      </article>
    </section>
  );
};
