import React from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigate to="/login" replace />
    </div>
  );
}

export default App;
