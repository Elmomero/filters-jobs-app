import { JobsCards } from "./components/JobsCards";
import { JobsFilters } from "./components/JobsFilters";
function App() {
  return (
    <div className="App">
      <div className="header-background"></div>
      <JobsFilters />
      <JobsCards/>
    </div>
  );
}

export default App;
