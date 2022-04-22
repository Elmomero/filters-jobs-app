import React from "react";
import { useDispatch } from "react-redux";
import { removeTag } from "../reducers/tagSlice";

export const JobsFilter = ({ filter }) => {
  const dispatch = useDispatch()
  return (
    <div className="filter-box">
      <p className="filter-text">{filter}</p>
      <div className="filter-image" role="button"
        onClick={()=>{
          dispatch(removeTag(filter))
        }}
      ></div>
    </div>
  );
};
