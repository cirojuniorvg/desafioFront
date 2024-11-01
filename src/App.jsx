import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RepositoryPage from '../pages/RepositoryPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/repository/:username/:repo" element={<RepositoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;