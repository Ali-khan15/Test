import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import FindJobs from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavbar />
        <Routes>
          <Route path="/" element={<FindJobs />} />
          <Route path="/find-jobs" element={<FindJobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;