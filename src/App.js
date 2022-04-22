import { useDispatch, useSelector } from "react-redux";
import { JobCard } from "./components/JobCard";
import { JobsFilter } from "./components/JobsFilter";
import jobs from "./data/data.json";
import { clearTag } from "./reducers/tagSlice";
function App() {
  const filters = useSelector((store)=> store.tags)
  // const filters = ["Frontend", "CSS", "Javascript", "React"];
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="header-background"></div>
      <article className="jobs-section">
        <section className="jobs-filters">
          {filters.map((filter) => (
            <JobsFilter key={filter} filter={filter} />
          ))}
        </section>
        <button className="clear-filters-button" 
        onClick={(e)=>{
          e.preventDefault()
          dispatch(clearTag())
        }}
        > Clear </button>
      </article>

      <section className="jobs-container">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job}/>
        ))}
      </section>
    </div>
  );
}

export default App;
