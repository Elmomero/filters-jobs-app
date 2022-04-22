import React from "react";
import { useDispatch} from "react-redux";
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
  const dispatch = useDispatch()

  const tags = [role, level, ...languages, ...tools];
  
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
        {tags.map((tag) => (
          <div className='job-tags' key={tag} role="button"
          onClick={()=> dispatch(toggleTag(tag))}>{tag}</div>
        ))}
      </section>
    </div>
  );
};
