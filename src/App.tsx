import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import JobSummary from './JobSummary';
import CandidateFlow from './CandidateFlow';
import Overview from './Overview';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="sections">
          <JobSummary />
          <CandidateFlow />
        </div>
        <Overview />
      </div>
    </div>
  );
}

export default App;
