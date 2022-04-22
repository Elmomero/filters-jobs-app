import { useSelector } from "react-redux";
import { JobsCards } from "./components/JobsCards";
import { JobsFilters } from "./components/JobsFilters";
function App() {
  const tags = useSelector((store) => store.tags);
  return (
    <div className="App">
      <div className="header-background"></div>
      {tags.length !== 0 && <JobsFilters />}
      <JobsCards />
    </div>
  );
}

export default App;
