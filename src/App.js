import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Totoro from './pages/Totoro/Totoro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Totoro />} />
      </Routes>
    </Router>
  );
}

export default App;
