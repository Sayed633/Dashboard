import React from 'react';
import Sidebar from './components/Sidebar.js';  // Corrected path
import Overview from './components/Overview';  // Corrected path
import './App.css';

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Overview />
    </div>
  );
}

export default App