import React from "react";
import { useDispatch } from "react-redux";
import { removeTag } from "../reducers/tagSlice";

export const JobsFilter = ({ tag }) => {
  const dispatch = useDispatch()
  return (
    <div className="filter-box">
      <p className="filter-text">{tag}</p>
      <div className="filter-image" role="button"
        onClick={()=>{
          dispatch(removeTag(tag))
        }}
      ></div>
    </div>
  );
};
